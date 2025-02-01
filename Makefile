.PHONY: build dev pull up install

build: up
	ddev exec npm run build
dev: build
	ddev exec npm run serve
pull: up
	ddev exec php craft servd-asset-storage/local/pull-database --from=production --interactive=0
	ddev composer install
install: up build
	ddev exec php craft setup/app-id \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft setup/security-key \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft install \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft plugin/install ckeditor
	ddev exec php craft plugin/install cp-field-inspect
	ddev exec php craft plugin/install hyper
	ddev exec php craft plugin/install postmark
	ddev exec php craft plugin/install vite
up:
	if [ ! "$$(ddev describe | grep OK)" ]; then \
        ddev start; \
        ddev composer install; \
        ddev exec npm install; \
    fi
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
