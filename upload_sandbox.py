import boto 


# Upload to s3 monkeyturksandbox
from boto.s3.key import Key
import sys 
from time import ctime 
import numpy as np

def upload_public_to_sandbox():

    bucket_name = 'monkeyturksandbox'
    conn = boto.connect_s3()
    bucket = conn.get_bucket(bucket_name)
    k = Key(bucket)

    import os
    filenames = os.listdir('public/')
    filenames = filter(lambda s: not s.startswith('.'), filenames)
    filepaths = map(lambda s: os.path.join('public', s), filenames)


    for root, subdir, files in os.walk('public/'): 
        for fname in files: 
            fpath = os.path.join(root,fname)
            k.key = fpath 
            k.set_contents_from_filename(fpath)
            print 'Uploaded %s'%fpath
            k.set_acl('public-read')


if __name__ == '__main__': 
    print 'hello'
    upload_public_to_sandbox()
    # commandline usage: python sandbox_publish.py [true/false upload to s3] [true/false upload to turk] [hit_n]
# http://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITOperation.html

