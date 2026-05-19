import os
import glob
import shutil

os.makedirs('day01', exist_ok=True)
os.makedirs('day02', exist_ok=True)

# Files that actually belong to day02 but were in the root directory
day02_files = ['alpha.java', 'money.java']

java_files = glob.glob('*.java')

for file in java_files:
    if file == 'move_script.py': continue
    
    # read the file
    with open(file, 'r') as f:
        content = f.read()
    
    target_dir = 'day02' if file in day02_files else 'day01'
    
    # if not already having package, add it
    if not content.startswith(f'package {target_dir};'):
        content = f'package {target_dir};\n\n' + content
        
    # write back and move
    new_path = os.path.join(target_dir, file)
    with open(new_path, 'w') as f:
        f.write(content)
        
    os.remove(file)

# clean up class files in root
class_files = glob.glob('*.class')
for file in class_files:
    os.remove(file)

print("Moved files and added packages")
