#!/bin/bash

# Array of script names
declare -a arr=("install_node.sh")

# Loop through the array
for script in "${arr[@]}"
do
    # Check if the script exists in the current directory
    if [ -f "$script" ]; then
        echo "Running $script"
        bash "$script"
    # Check if the script exists in the scripts/ directory
    elif [ -f "scripts/$script" ]; then
        echo "Running scripts/$script"
        bash "scripts/$script"
    else
        echo "Script $script not found"
    fi
done