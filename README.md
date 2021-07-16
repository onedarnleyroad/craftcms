# onedarnleyroad/craftcms

Boilerplate Craft CMS set up for all One Darnley Road projects.

**!!! New version WIP !!!**

_This new version will be using ViteJS and attempts to be less opinionated._

### Features:

- DDEV for local development
- ViteJS for build & HMR
- Tailwind JIT
- AlpineJS V3

### Missing Features

- Ability to run ViteJS HMR from within the container
- Ability to run https during ViteJS HMR

### Roadmap

- Support missing features
- Makefiles for a unified CLI

---

### Local machine prerequisites:

1. [Docker](https://www.docker.com/) & [DDEV](https://ddev.readthedocs.io/)
1. [Node](https://nodejs.org/en/) 14
1. We recommend using [NVM](https://github.com/nvm-sh/nvm) to manage multiple node versions.

### Getting Started

Open terminal prompt in an empty project directory, and:

1. `ddev config`
    1. Project Name `craftcms` would result in a project URL of `http://craftcms.ddev.site`
    1. Docroot Location defaults to `web`
    1. Project Type defaults to `php`
1. `ddev composer create --no-install "onedarnleyroad/craftcms"`
1. Edit `.env`
    1. set `PRIMARY_SITE_URL` e.g. `http://projectname.ddev.site`
    1. set `CP_TRIGGER` e.g. `admin`
1. `ddev exec composer install`
1. `ddev exec ./craft setup/app-id`
1. `ddev exec ./craft setup/security-key`
1. Visit CP to run through installation steps, e.g. `http://projectname.ddev.site/admin`; alternatively run `ddev exec ./craft welcome`
1. `npm install`

### Craft CMS Plugins

1. Agnostic Fetch
1. Async Queue
1. CP Field Inspect
1. Imager-X
1. Knock Knock
1. Postmark
1. Redactor
1. Seomatic
1. Vite

### Tailwind Plugins

1. Aspect Ratio
1. Line Clamp
1. Typography

### Javascript Libraries

1. AlpineJS
1. Lazysizes
