import boto 
from boto.s3.key import Key
import sys 
import os 


bucket_name = 'milresources' # specify this
bag_directory = '/Users/michaellee/Dropbox (MIT)/MutantBakery/GeneratedImages/MutatorTraining' # specify this

conn = boto.connect_s3()
bucket = conn.get_bucket(bucket_name)


for root, subdir, files in os.walk(bag_directory): 
    for fname in files:

        k = Key(bucket)

        fpath = os.path.join(root,fname) 
        file_key = '/Images/'+fpath.split('GeneratedImages/')[1] # specify this; the string after this from bag_directory + the filename forms the key
        k.key = file_key 

        
        k.set_contents_from_filename(fpath)

        k.set_acl('public-read')

        file_url = "https://s3.amazonaws.com/"+bucket_name + file_key # specify this
        print 'Uploaded %s'%file_url
