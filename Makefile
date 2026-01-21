format:
	npx prettier --write "**/*.{html,css}"
css: format
	npx @tailwindcss/cli -i tailwindsrc.css -o style.css --watch
build:
	npx @tailwindcss/cli -i tailwindsrc.css -o style.css --minify
	npx prettier --write "**/*.{html,css}"

.PHONY: format css build