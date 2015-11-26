export PATH := node_modules/.bin:$(PATH)

all: template
	shopt -s globstar && tsconfig-updater src/**/*.ts
	cd ./gen-serverspec-info/ && bundle exec ./main.rb > ../dest/info.js
	tsc

template: src/template/*
	js-file2string -fr src/template/* > dest/code/templates.js
	js-file2string -frt src/template/* > src/code/templates.d.ts


browserify:
	browserify dest/index.js -o example/index.js

depends:
	dtsm install
	go get -u github.com/pocke/tsconfig-updater github.com/pocke/js-file2string
	cd gen-serverspec-info/ && bundle install

lint:
	tslint **/*.ts

clean:
	git clean -xf
