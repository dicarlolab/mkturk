import boto 
from boto.mturk.question import ExternalQuestion


url = 'https://s3.amazonaws.com/monkeyturksandbox/mkturk.html'
frame_height_pix = 1200 
lifetime = 1209600 # In seconds, I think 
reward_amount = 0.01 # in dollars?

MTURK_SANDBOX_HOST = 'mechanicalturk.sandbox.amazonaws.com'
conn = boto.connect_mturk(host = MTURK_SANDBOX_HOST)
print conn
print conn.get_account_balance()
q = ExternalQuestion(external_url = url, frame_height = frame_height_pix)
print q
#conn.create_hit(question = q, lifetime =  lifetime, max_assignments = 1, title = "hello mil", keywords = 'hello mil MIT', reward = reward_amount)

# http://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITOperation.html

