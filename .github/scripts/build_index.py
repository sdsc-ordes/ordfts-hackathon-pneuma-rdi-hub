import argparse
import json
import os
from pathlib import Path
import yaml
import jsonschema
from datetime import datetime

def read_yaml_files(base_path, folders):
    yaml_files = []
    for folder in folders:
        folder_path = base_path.joinpath(folder)
        for yaml_file in list(folder_path.glob('*.yaml')) + list(folder_path.glob('*.yml')):
            with open(yaml_file, 'r', encoding='utf-8') as f:
                yaml_files.append((folder, yaml.safe_load(f)))
    return yaml_files

def validate_yaml(yaml_content, schema_path):
    with open(schema_path, 'r', encoding='utf-8') as f:
        schema = json.load(f)
    jsonschema.validate(instance=yaml_content, schema=schema)

def build_index(yaml_files, schemas_path):
    index = {'index_timestamp': str(datetime.now()), 'catalog': {}}
    for folder, content in yaml_files:
        schema_path = schemas_path.joinpath(f"{folder}.json")
        try:
            validate_yaml(content, schema_path)
            if folder not in index['catalog']:
                index['catalog'][folder] = []
            index['catalog'][folder].append(content)
        except jsonschema.exceptions.ValidationError as e:
            print(f"Validation error in {folder}: {e}")
    return index

def main():
    parser = argparse.ArgumentParser(description="Build and deploy index from YAML files.")
    parser.add_argument("--build-branch", "-b", type=str, required=True, help="Path to the build branch.")
    parser.add_argument("--deploy-branch", "-d", type=str, required=True, help="Path to the deploy branch.")
    parser.add_argument("--folders-to-scan", "-f", type=str, nargs='+', default=["datasets"], help="List of folders to scan for YAML files.")
    args = parser.parse_args()

    build_path = Path(args.build_branch)
    deploy_path = Path(args.deploy_branch)
    schemas_path = build_path.joinpath('catalog/schemas')

    yaml_files = read_yaml_files(build_path.joinpath('catalog'), args.folders_to_scan)
    index = build_index(yaml_files, schemas_path)

    deploy_path.mkdir(parents=True, exist_ok=True)
    with open(deploy_path.joinpath('index.json'), 'w', encoding='utf-8') as f:
        json.dump(index, f, indent=4)

    with open(build_path.joinpath('src/index.json'), 'w', encoding='utf-8') as f:
        json.dump(index, f, indent=4)

if __name__ == "__main__":
    main() 