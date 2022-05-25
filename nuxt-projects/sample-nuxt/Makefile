.PHONY: all help prettier stylelint eslint


all:
	@echo "I am here"


help:
	@echo "I will help you"


prettier: 
	prettier --write --list-different . && npm run lint:js -- --fix && npm run lint:style -- --fix



eslint:
	eslint --ext ".js,.ts,.vue" --ignore-path .gitignore . "--fix"


stylelint:
	stylelint "**/*.{css,scss,sass,html,vue}" --ignore-path .gitignore "--fix"