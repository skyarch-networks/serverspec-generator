export PATH := node_modules/.bin$(PATH)

all:
	tsc

typing:
	dtsm install

lint:
	tslint **/*.ts
