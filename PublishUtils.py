import boto 
from boto.s3.key import Key

conn = boto.connect_s3()
bucket = conn.get_bucket('monkeyturk')
k = Key(bucket)

import os
filenames = os.listdir('public/')
filenames = filter(lambda s: not s.startswith('.'), filenames)
filepaths = map(lambda s: os.path.join('public', s), filenames)

for fname, fpath in zip(filenames, filepaths): 
    k.key = fname
    k.set_contents_from_filename(fpath)
    k.make_public()
    print 'Uploaded %s'%fname