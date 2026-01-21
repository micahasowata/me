format:
	npx prettier --write "**/*.{html,css}"
css: format
	npx @tailwindcss/cli -i input.css -o style.css --watch
.PHONY: format css