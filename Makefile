.PHONY: build dev pull up install

build: up
	ddev exec npm run build
dev: build
	ddev exec npm run serve
pull: up
	ddev craft servd-asset-storage/local/pull-database --from=production --interactive=0
	ddev composer install
install:
	@test -f .env || cp .env.example .env
	rm -f .gitignore composer.json composer.lock CHANGELOG.md LICENSE.md
	mv -f .gitignore.default .gitignore
	mv -f composer.json.default composer.json
	ddev craft setup/app-id \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev craft setup/security-key \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev craft install \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev craft plugin/install ckeditor
	ddev craft plugin/install cp-field-inspect
	ddev craft plugin/install hyper
	ddev craft plugin/install postmark
	ddev craft plugin/install vite
up:
	if [ ! "$$(ddev describe | grep OK)" ]; then \
        ddev start; \
        ddev composer install; \
        ddev exec npm install; \
    fi
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
