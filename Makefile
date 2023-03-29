.PHONY: build dev pull up install

build: up
	ddev exec npm run build
dev: build
	ddev launch
	ddev exec npm run serve
pull: up
	ddev exec bash scripts/pull_assets.sh
	ddev exec bash scripts/pull_db.sh
install: up build
	ddev exec php craft setup/app-id \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft setup/security-key \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft install \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft plugin/install cp-field-inspect
	ddev exec php craft plugin/install hyper
	ddev exec php craft plugin/install imager-x
	ddev exec php craft plugin/install knock-knock
	ddev exec php craft plugin/install postmark
	ddev exec php craft plugin/install redactor
	ddev exec php craft plugin/install seomatic
	ddev exec php craft plugin/install vite
up:
	if [ ! "$$(ddev describe | grep OK)" ]; then \
        ddev auth ssh; \
        ddev start; \
    fi
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
