export PATH := node_modules/.bin:$(PATH)

all:
	shopt -s globstar && tsconfig-updater src/**/*.ts
	js-file2string src/template/* > dest/code/templates.js
	tsc

browserify:
	browserify dest/index.js -o example/index.js

depends:
	go get -u github.com/pocke/tsconfig-updater github.com/pocke/js-file2string
	npm install
	dtsm install

lint:
	tslint **/*.ts
