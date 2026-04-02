.PHONY: build dev pull up install

build: up
	ddev exec npm run build
dev: build
	ddev exec npm run serve
install:
	@test -f .env || cp .env.example .env
	rm -f .gitignore composer.json composer.lock CHANGELOG.md LICENSE.md
	mv -f .gitignore.default .gitignore
	mv -f composer.json.default composer.json
	ddev composer install
	ddev exec npm install
	ddev craft install
	ddev craft plugin/install ckeditor
	ddev craft plugin/install cp-field-inspect
	ddev craft plugin/install hyper
	ddev craft plugin/install postmark
	ddev craft plugin/install vite
pull: up
	ddev craft servd-asset-storage/local/pull-database --from=production --interactive=0
	ddev composer install
up:
	if [ ! "$$(ddev describe | grep OK)" ]; then \
        ddev start; \
        ddev composer install; \
        ddev exec npm install; \
    fi
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
