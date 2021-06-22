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
1. Node
1. NVM with Node ^14 available via `nvm use 14`

### Getting Started

1. `composer create-project onedarnleyroad/craft {PATH} --no-install`
1. `cd {PATH}`
1. `nvm use 14`
1. `npm install`
1. `ddev config`
1. Set `webserver_type: apache-fpm` in `/.ddev/config.yaml`
1. Set up `.env`
   - `cp .example.env .env`
   - set `PRIMARY_SITE_URL`
   - set `CP_TRIGGER`
1. `ddev auth ssh && ddev start`
1. `ddev ssh`
1. `composer install`
1. `./craft setup/app-id`
1. `./craft setup/security-key`
