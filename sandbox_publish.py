import boto 
from boto.mturk.question import ExternalQuestion


# Upload to s3 monkeyturksandbox
from boto.s3.key import Key
import sys 
from time import ctime 


def main(argv):

    if(len(argv)>1): 
        if(argv[0] in ['true', 'True', 'y']):  
            update_s3 = True
        else: 
            update_s3 = False

        if(len(argv)>2): 
            if(argv[1] in ['true', 'True', 'y']): 

                upload_to_mechanical_turk_sandbox = True
            else: 
                upload_to_mechanical_turk_sandbox = False
        else: 
            upload_to_mechanical_turk_sandbox = False 
    else: 
        update_s3 = True 
        upload_to_mechanical_turk_sandbox = True

    HIT_title = 'hello_mil'+ctime()
    print ctime()

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


    if(upload_to_mechanical_turk_sandbox): 
        print 'UPLOADING TO SANDBOX'
        url = 'https://s3.amazonaws.com/monkeyturksandbox/public/mkturk.html'
        frame_height_pix = 1200 
        lifetime = 1209600 # In seconds, I think 
        reward_amount = 0.01 # in dollars?

        MTURK_SANDBOX_HOST = 'mechanicalturk.sandbox.amazonaws.com'
        conn = boto.connect_mturk(host = MTURK_SANDBOX_HOST)

        q = ExternalQuestion(external_url = url, frame_height = frame_height_pix)
        print q
        conn.create_hit(question = q, lifetime =  lifetime, max_assignments = 10, title = HIT_title, keywords = 'dicarlo hello mil MIT', reward = reward_amount)


if __name__ == '__main__': 
    print 'hello'
    for arg in sys.argv: 
        print arg, type(arg)
    if(len(sys.argv)>1): 
        arg = sys.argv[1:]
    else: 
        arg = []
    main(arg)
    # commandline usage: python sandbox_publish.py [true/false upload to s3] [true/false upload to turk] [hit_n]
# http://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITOperation.html

