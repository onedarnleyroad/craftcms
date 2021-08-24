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

#### Option 1: With Composer

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

Make sure that `PATH` is a new **or** _existing and empty_ folder. Then run:

```
cd PATH
rm -rf ./.git
composer run-script post-create-project-cmd
```

`rm -rf ./.git` will remove the repo's `.git` folder after cloning.

`composer run-script post-create-project-cmd` prepares the project for using our default composer setup.

#### Option 3: Manual Download

Download a copy of the repo to your local machine and move to where you want to your project to run.

----

Once you have a copy of the project saved to your local machine, from the terminal inside `PATH`, continue with setup:

1. Run `ddev config` if you wish to change the project name from something other than `craftcms`. Follow the prompts.
    1. Project Name `mysite` would result in a project URL of `http://mysite.ddev.site`
    2. Docroot Location defaults to `web`
    3. Project Type defaults to `php`
2. Edit `.env`
    1. set `PRIMARY_SITE_URL` based on the Project Name, e.g. `http://craftcms.ddev.site`
    2. set `CP_TRIGGER` e.g. `admin`
3. Run `ddev start` to start your container
4. `ddev exec composer install` to install composer
5. `ddev exec ./craft setup/app-id` to generate an `APP_ID`
6. `ddev exec ./craft setup/security-key` to generate a `SECURITY_KEY`
7. `ddev exec npm install` to install npm for Vite
8. `ddev exec ./craft install` to begin the installation process. Alternatively you may visit CP to run through installation steps, e.g. `http://craftcms.ddev.site/admin`

Note: as an alternative to `ddev exec...` you can also `ddev ssh` into the container and then run everything without that preamble.

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
