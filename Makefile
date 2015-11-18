export PATH := node_modules/.bin$(PATH)

all:
	shopt -s globstar && tsconfig-updater src/**/*.ts
	tsc

depends:
	go get -u github.com/pocke/tsconfig-updater github.com/pocke/js-file2string
	npm install
	dtsm install

lint:
	tslint **/*.ts
