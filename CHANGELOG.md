# onedarnleyroad/craftcms Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.3.0]

## Added:

- Add a boilerplate Site Module
- Ensure `base.twig` does not introduce whitespace at start of response
- New `HARD_MODE` to throw deprecation errors by environment

## Changed:

- Updated for DDEV 1.19 compatibility
- Default to Node version 16, composer 2
- Update Craft, plugins & NPM packages to latest
- Upgrade Tailwind 3.x

## [2.2.4]

### Changed
- Temporarily remove extra packages for puppeteer (currently not working with DDEV v1.18)
- "Edit this page" now works for any editable element

### Added

- add dir= based on current site / locale
- add inline CSS rule to support [`x-cloak`](https://alpinejs.dev/directives/cloak)

## [2.2.3]

- bump autoprefixer
- Use Craft 3.7.13's new [`craft up`](https://craftcms.com/docs/3.x/console-commands.html#up) command

### Fixed

- Fix syntax error in composer file

## [2.2.2]

### Added

- Add extra packages to enable Puppeteer Headless Chrome support (for Critical CSS).
- Add Craft favicon to webroot

### Changed

- Move Tailwind and plugins under package's "dependencies" 

## [2.2.1]

### Changed

- Remove trailing slashes from `@web` alias
- Use aliases when configuring Vite URLs

## [2.2.0]

### Added
- add `@` alias for `/src` folder
- add Makefile
- establish sane folder structure for CSS
- add Typed Link Field to default install

### Changed

- remove `config/one.php` & `APP` js variable, no longer part of our convention
- remove sass in favor of postcss-import + tailwindcss/nesting
- `web/dist` is now ignored, assumes deployment process includes build step
- added more exclusion rules to `.deployignore`

### Fixed

- copy `.gitignore.default` to `.gitignore` after composer create-project

## [2.1.1]

### Changed

- Start `package.json` version at `0.0.1`

### Fixed

- Fix path to `app.scss`

## [2.1.0]

### Changed

- `/.ddev` is no longer ignored
- ddev comes pre-configured with node 14
- ddev comes pre-configured to expose vite via port 3000
- Vite now runs inside the DDEV container
- Craft Vite pings the internal dev server to ensure ser  

## [2.0.1]

### Added

- Use SASS for CSS compilation
- Add [Autocomplete for Craft CMS](https://github.com/nystudio107/craft-autocomplete)
- Add `jsconfig.json` for better intellisense of vite aliases
- Improve readme
- Simplify to 2 scripts: `npm run build` and `npm run serve`
- Invalidate all template tags as part of composer `craft-scripts`

### Changed
- Update Craft ^3.7
- Update npm packages: Alpine ^3.2, Autoprefixer ^10.3, Vite ^2.5, SASS ^1.38

## [2.0.0]

### Changed

- Swap webpack for vitejs
- Reduce number of starter plugins

## [1.4.0]

### Added

- `one` script for CLI
- `.deployignore` for DeployHQ atomic deployments

### Changed

- Update dotenv to 3.*
- Allow craft headers to be sent

## [1.3.0]

### Added

- Add Template Comments plugin
- Add CP Field Inspect plugin
- lang= and dir= attributes to HTML root node
- add one.php config

### Changed

- streamlined environment config
- turn on project config
- exclude vendor
- Allow Craft above 3.2
- consolidated error templates and refactored title/message/block output
- removed SearchIt from default install

## [1.2.3]

### Fixed

- Make sure our default composer requires < 3.2.0
## [1.2.2]

### Changed
- Keep Craft below 3.2 until we are confident it is stable for new builds

## [1.2.1]

### Added
- Postmark mail adapter
- Add commented out line for `runQueueAutomatically` config

### Changed
- Local environment mailer uses SMTP (defaults to mailhog)
- Prevent updates in production

## [1.2.0]

### Changed
- No longer use our env() for environment variable loading
- Use @web instead of environment variable when defining volumes
- Try to improve composer require/platform specifications 

## [1.1.2]

### Added
- Some unnamed tidy webpack & front-end tweaks

## [1.1.1]

### Added
- Add preferred plugins: Agnostic Fetch, Queue Manager, Retcon-Craft
- Add some default _errors templates
- Add config file for Imager

### Changed
- Ignore .ddev
- Change to *.twig file extensions
- Adjust ignore strategy so that `storage` exists
- Improved multi-env config for SEOmatic
- Improved multi-env config for mailer; default to mailhog
- Upgraded to Async Queue 2.x; now requires PHP7.1 minimum
- Configure mailer as SMTP, pull creds from `.env`
- Set @web alias to DEFAULT_SITE_URL from `.env`

## [1.1.0]
### Added
- Add the `DEFAULT_SITE_URL` Environment Variable to `.env.example`
- Set `allowAdminChanges` to `true` for production environment

### Changed
- Bump composer dependency to  Craft ^3.1.0, and Redactor ^2.3
- Use `DEFAULT_SITE_URL` in favour of `@web` for setting `url` values for Volumes
- Change `isSystemOn` to `IsSystemLive`

## [1.0.2]
### Added
- Webpack, Postcss, Tailwind, Package.json.....
- Our typical Front End setup, opinionated, but all configured for a craft approach to HMR / webpack dev server etc. 
- Still to do is to hook this build process into our config.php method of pinging port 9000 to see if we should serve webpack dev server assets, or built files.
- Include ostark/craft-async-queue to our default required plugins

### Changed
- `env()` has been namespaced to avoid collision and moved into `modules/onedarnleyroad/functions.php`

## [1.0.1]
### Added
- default DDEV config
- Installation instructions and more README
### Fixed
- remove composer.lock
### Changed
- composer.json.default replaces composer.json

## [1.0.0]
### Added
- Initial release
- Use Laravel's env() for better getenv()
- Require Redactor, LinkIt, SearchIt, Retour, SEOmatic, and craft-scripts
- Add a few more default config files
