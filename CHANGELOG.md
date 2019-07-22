# onedarnleyroad/craftcms Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- lang= and dir= attributes to HTML root node

### Changed

- consolidated error templates and refactored title/message/block output

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
