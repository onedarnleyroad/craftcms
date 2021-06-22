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

### Prerequisites:

1. Docker & DDEV
1. Node 14

### Getting Started

Open terminal prompt in an empty project directory, and:

1. `ddev config`
    1. Project Name `craftcms` would result in a project URL of `http://craftcms.ddev.site`
    1. Docroot Location defaults to `web`
    1. Project Type defaults to `php`
1. `ddev composer create --no-install "onedarnleyroad/craftcms"`
1. `npm install`
1. Edit `.env`
    1. set `PRIMARY_SITE_URL` e.g. `http://projectname.ddev.site`
    1. set `CP_TRIGGER` e.g. `admin`
1. `ddev exec composer install`
1. `ddev exec ./craft setup/app-id`
1. `ddev exec ./craft setup/security-key`
1. Visit CP to run through installation steps, e.g. `http://projectname.ddev.site/admin`

### Craft CMS Plugins

1. Agnostic Fetch
1. Async Queue
1. CP Field Inspect
1. Imager-X
1. Knock Knock
1. Postmark
1. Redactor
1. Retour
1. Seomatic
1. Vite

### Tailwind Plugins

1. Typography
1. Aspect Ratio

### Javascript Libraries

1. AlpineJS
1. Lazysizes
