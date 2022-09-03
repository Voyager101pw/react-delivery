start:
	npx concurrently --kill-others "npm run server" "npm run frontend"
	
prebuild:
	npm run prebuild
	
build: 
	npm run build

install-deps:
	npm ci

lint:
	npx eslint . --ext js,jsx

lint-fix:
	npx eslint . --ext js,jsx --fix .