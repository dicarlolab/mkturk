import sys, os, json


DEFAULT_SAVE_DIRECTORY = '/Users/michaellee/Dropbox (MIT)/Apps/MonkeyTurk_mil_app/Resources/ImageBagDefinitions'

def main(argv): 
    bagname = argv[0]
    imagebag_directory_path = argv[1]
    intended_imagepath_prefix = argv[2]

    if imagebag_directory_path.endswith('.png') or imagebag_directory.endswith('.jpg'): 
        fnames = [os.path.split(imagebag_directory_path)[1]]
    else: 
        fnames = os.listdir(imagebag_directory_path)
        imagenames = filter(lambda s: not s.startswith('.') and (s.endswith('.png') or s.endswith('.jpg')), fnames)
    print fnames
    print len(fnames), ' images found'

    meta_dict = {}
    meta_dict['path'] = []
    for _f in fnames: 
        meta_dict['path'].append(os.path.join(intended_imagepath_prefix, _f))

    with open(os.path.join(DEFAULT_SAVE_DIRECTORY, bagname+'.txt'), 'w') as f: 
        json.dump(meta_dict, f)
        print('Saved', os.path.join(DEFAULT_SAVE_DIRECTORY, bagname+'.txt'))


if __name__ == '__main__': 
    main(sys.argv[1:])
    
    # Commandline syntax: python MetaGenerator.py [bagname]  [imagebag_directory] [intended imagepath prefix] 
