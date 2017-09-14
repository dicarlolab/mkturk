import boto 
from boto.mturk.question import ExternalQuestion
import upload_sandbox 

# Upload to s3 monkeyturksandbox
from boto.s3.key import Key
import sys 
from time import ctime 
import numpy as np
import os 

def main(argv):
    fpath = argv[0]
    fname = os.path.split(fpath)[1]
    upload_sandbox.upload_public_to_sandbox()

    bucket_name = 'monkeyturksandbox'
    conn = boto.connect_s3()
    bucket = conn.get_bucket(bucket_name)
    k = Key(bucket)
    k.key = os.path.join('LandingPages/', fname)
    k.set_contents_from_filename(fpath)
    print 'Uploaded %s'%fpath
    k.set_acl('public-read')



    HIT_title = 'hello_mil'+ctime()
    print ctime()

    if len(argv) == 1:
        print 'UPLOADING TO SANDBOX'
        url = os.path.join('https://s3.amazonaws.com/monkeyturksandbox/LandingPages/', fname)
        MIN_REQUIRED_PIXELS = 768 # todo: move into experiment constructor 
        frame_height_pix = int(np.round(MIN_REQUIRED_PIXELS*1.1))# https://www.w3schools.com/browsers/browsers_display.asp 
        lifetime = 1209600 # In seconds, I think 
        reward_amount = 0.01 # in dollars
        HIT_duration = 1800

        MTURK_SANDBOX_HOST = 'mechanicalturk.sandbox.amazonaws.com'
        conn = boto.connect_mturk(host = MTURK_SANDBOX_HOST)

        q = ExternalQuestion(external_url = url, frame_height = frame_height_pix)
        print q
        _hit_info = conn.create_hit(question = q, duration = HIT_duration, 
            lifetime =  lifetime, max_assignments = 10, title = HIT_title, keywords = 'dicarlo hello mil MIT', reward = reward_amount)
        for _hit in _hit_info: 
            print _hit, _hit.HITTypeId, _hit.HITId

if __name__ == '__main__': 
    print 'hello'
    main(sys.argv[1:])
    # commandline usage: python sandbox_publish.py [local_path_to_HIT_landing_page_html]


