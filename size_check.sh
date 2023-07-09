#!/bin/bash

set -e

find ./public -size +512 -print | while read line ; do
    if grep -Fxq "$line" allowed_large.txt
    then
        echo "$line is above 512kb, but has been allowlisted"
    else
        echo "$line should be compressed below 512kb"
        exit 1
    fi
done

echo "check complete"
exit 0
