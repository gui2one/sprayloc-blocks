
print("python script")

import os, fnmatch
import zipfile


root_files = [
    './sprayloc-blocks.php',
    './script.js',
    './admin-script.js',
    './admin-style.css',
]

def zipdir(path, ziph, files = []):
    # ziph is zipfile handle
    print("\nZipping files for Archive :\n")
    for root, dirs, files in os.walk(path):
        for file in files:
            file_path = os.path.join(root, file) 
            ziph.write(file_path)
            print (file_path)

    for file_name in root_files : 
        print(file_name)
        ziph.write(file_name)

if __name__ == '__main__':
    zipf = zipfile.ZipFile('sprayloc-blocks.zip', 'w', zipfile.ZIP_DEFLATED)
    zipdir('build/', zipf)
    zipf.close()