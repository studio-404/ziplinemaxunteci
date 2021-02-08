if [$1=='st']
then
	git status;
else
	git add .;
	git commit -m "$1";
	git push -u origin webdeveloper;
fi
