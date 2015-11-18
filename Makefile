export PATH := node_modules/.bin:$(PATH)

all:
	shopt -s globstar && tsconfig-updater src/**/*.ts
	cd src/template/ && js-file2string * > ../../dest/code/templates.js
	cd ./gen-serverspec-info/ && bundle exec ./main.rb > ../dest/info.js
	tsc

browserify:
	browserify dest/index.js -o example/index.js

depends:
	npm install
	dtsm install
	go get -u github.com/pocke/tsconfig-updater github.com/pocke/js-file2string
	cd gen-serverspec-info/ && bundle install

lint:
	tslint **/*.ts
