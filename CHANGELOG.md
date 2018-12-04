# onedarnleyroad/craftcms Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
