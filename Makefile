export PATH := node_modules/.bin$(PATH)

all:
	tsc

depends:
	npm install
	dtsm install

lint:
	tslint **/*.ts
