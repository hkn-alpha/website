approved=1
while read changed_file; do
	if ! cat approved_folders.txt | grep "^$changed_file"; then
		echo "$changed_file cannot be auto-approved, giving up."
		approved=0
		break
	fi
done <<< $(git diff --name-only main) 

if [ $approved -eq 1 ]; then
	echo "All changed files are legal for auto-approve."
else
	echo "Some changed files could not be auto approved."
fi
