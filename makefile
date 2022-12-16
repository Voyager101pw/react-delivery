start:
	npx concurrently --kill-others "npm run server" "npm run frontend"

test:
	npm run test

prebuild:
	npm run prebuild
	
build: 
	npm run build

report:
	NODE_ENV=production node analyze.js

install-deps:
	npm ci

lint:
	npx eslint . --ext ts,tsx

lint-fix:
	npx eslint . --ext ts,tsx --fix .
