import os
import re

def clean_svg_aria(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Regex to find <svg ... > blocks and remove duplicate aria-hidden="true"
    def remove_duplicate_aria(match):
        svg_tag = match.group(0)
        # Find all occurrences of aria-hidden="true"
        aria_count = svg_tag.count('aria-hidden="true"')
        if aria_count > 1:
            # Keep only the first one
            # Find the first occurrence
            first_idx = svg_tag.find('aria-hidden="true"')
            # Find the rest and remove them
            parts = svg_tag.split('aria-hidden="true"')
            new_tag = parts[0] + 'aria-hidden="true"' + "".join(parts[1:])
            return new_tag
        return svg_tag

    # Match <svg followed by anything until > (handling multiline)
    new_content = re.sub(r'<svg[^>]*>', remove_duplicate_aria, content, flags=re.DOTALL)
    
    if content != new_content:
        with open(file_path, 'w') as f:
            f.write(new_content)
        print(f"Cleaned {file_path}")
    else:
        print(f"No changes for {file_path}")

components_dir = '/Users/adiprimanto/Developer/Rangkai Web/nil-entertain/nil-landing/app/components'
for filename in os.listdir(components_dir):
    if filename.endswith('.vue'):
        clean_svg_aria(os.path.join(components_dir, filename))
