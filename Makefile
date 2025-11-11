.PHONY: run

run:
	@command -v npx >/dev/null 2>&1 || { echo "npx not found. Please install Node.js and npm."; exit 1; }
	@npx eleventy --version >/dev/null 2>&1 || { echo "Eleventy not found. Installing dependencies..."; npm install; }
	npm run dev
