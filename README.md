# onedarnleyroad/craftcms

Boilerplate Craft CMS set up for all One Darnley Road projects.

### Features:

- DDEV for local development
- ViteJS for build & HMR
- Tailwind JIT
- AlpineJS V3

### Roadmap

- Makefiles for a unified CLI
- Continue to improve docs
- Bugfixes, new features

---

### Local machine prerequisites:

1. [Docker](https://www.docker.com/) & [DDEV](https://ddev.readthedocs.io/)

### Getting Started

#### Option 1: With Composer (recommended)

If you have [Composer](https://getcomposer.org/) installed on your local machine,
you can use `create-project` to pull the latest tagged release.

Open terminal prompt, and run:

```
composer create-project onedarnleyroad/craftcms PATH --no-install
```

Make sure that `PATH` is a new **or** _existing and empty_ folder.

#### Option 2: With Git CLI

Alternatively you can clone the repo via the Git CLI:

```
git clone git@github.com:onedarnleyroad/craftcms.git PATH
```

Make sure that `PATH` is a new **or** _existing and empty_ folder.

Next, you'll want to discard the existing `/.git` directory. In the terminal, run:

```
cd PATH
rm -rf ./.git
```

Last, clean up and set some default files for use:

```
cp .env.example .env
mv -f composer.json.default composer.json
mv -f .gitignore.default .gitignore
rm CHANGELOG.md && rm LICENSE.md && rm README.md
```

#### Option 3: Manual Download

Download a copy of the repo to your local machine and move to where you want to your project to run. Similar to above, you'll then want to clean up and set some default files for use. In ther terminal, run:

```
cd PATH
cp .env.example .env
mv -f composer.json.default composer.json
mv -f .gitignore.default .gitignore
rm CHANGELOG.md && rm LICENSE.md && rm README.md
```

### Setting up DDEV, Craft, and Vite

Once you have a copy of the project saved to your local machine, from the terminal inside `PATH`, continue with setup:

1. Run `ddev config` if you wish to change the project name from something other than `craftcms`. Follow the prompts.
  1. Project Name `mysite` would result in a project URL of `https://mysite.ddev.site`
  2. Docroot Location defaults to `web`
  3. Project Type defaults to `php`
2. Edit `.env`
  1. Set `PRIMARY_SITE_URL` based on the Project Name, e.g. `https://mysite.ddev.site`
  2. Optionally change `CP_TRIGGER` to something other than `admin`
3. Run `ddev start && ddev ssh` to start & SSH into your container
4. `npm install && composer install` to install npm & composer
5. `./craft setup/app-id` to generate an `APP_ID` (or provide your own and save to `.env`)
6. `./craft setup/security-key` to generate a `SECURITY_KEY` (or provide your own and save to `.env`)
7. `./craft install` to begin the installation process. Alternatively you may visit CP to run through installation steps, e.g. `https://craftcms.ddev.site/admin`

Note: as an alternative to SSHing into the container, you can run all commands outside of the container, by prefixing each command with `ddev exec`, e.g. `ddev exec npm install`. [Read DDEV's docs](https://ddev.readthedocs.io/) for more about its CLI.

### Local development with Vite

DDEV has been configured for Vite to run _inside_ the container. The following commands assume you have SSHed into the container; if not, add `ddev exec ` to each command:

To spin up Vite HMR, run:

```
npm run serve
```

For a production build, run:

```
npm run build
```

### Craft CMS Plugins

1. Agnostic Fetch
2. Async Queue
3. CP Field Inspect
5. Craft Autocomplete
6. Imager-X
7. Knock Knock
8. Postmark
9. Redactor
10. Seomatic
11. Vite

### Tailwind Plugins

1. Aspect Ratio
1. Line Clamp
1. Typography

### Javascript Libraries

1. AlpineJS
1. Lazysizes
