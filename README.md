## About onedarnleyroad/craftcms

This is the boilerplate Craft CMS set up for all [One Darnley Road](https://www.onedarnleyroad.com/) projects.

## Notable Features:

- [DDEV](https://ddev.readthedocs.io/) for local development
- [ViteJS](https://vitejs.dev/) for build & HMR
- [Tailwind](https://tailwindcss.com) with [JIT](https://tailwindcss.com/docs/just-in-time-mode) enabled
- [AlpineJS](https://alpinejs.dev/)
- Deployments via [DeployHQ](https://www.deployhq.com/)
- [Postmark](https://postmarkapp.com/) for email delivery
- [Makefile](https://www.gnu.org/software/make/manual/make.html) for common CLI commands

## Local machine prerequisites:

1. [Docker](https://www.docker.com/)
2. [DDEV](https://ddev.readthedocs.io/)
3. Optional but recommended, [Composer](https://getcomposer.org/)

## Getting Started

### Option 1: With Composer (recommended)

If you have [Composer](https://getcomposer.org/) installed on your local machine,
you can use `create-project` to pull the latest tagged release.

Open terminal prompt, and run:

```
composer create-project onedarnleyroad/craftcms PATH --no-install
```

Make sure that `PATH` is a **new** _or_ **existing and empty** folder.

### Option 2: With Git CLI

Alternatively you can clone the repo via the Git CLI:

```
git clone git@github.com:onedarnleyroad/craftcms.git PATH
```

Make sure that `PATH` is a **new** _or_ **existing and empty** folder.

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

### Option 3: Manual Download

Download a copy of the repo to your local machine and move to where you want to your project to run. Similar to above, you'll then want to clean up and set some default files for use. In the terminal, run:

```
cd PATH
cp .env.example .env
mv -f composer.json.default composer.json
mv -f .gitignore.default .gitignore
rm CHANGELOG.md && rm LICENSE.md && rm README.md
```

## Setting up DDEV & Craft

_Note: This section is optional if you are simply test-driving this project. If that is you, feel free to skip to the next section. ⚡_

Once you have a copy of the project saved to your local machine, from the terminal inside `PATH`, continue with setup:

1. Run `ddev config` if you wish to change the project name from something other than `craftcms`. Follow the prompts.
   - Project Name `mysite` would result in a project URL of `https://mysite.ddev.site`
   - Docroot Location defaults to `web`
   - Project Type defaults to `php`
2. Edit `.env`
   - Set `PRIMARY_SITE_URL` based on the Project Name, e.g. `https://mysite.ddev.site`
   - Optionally change `CP_TRIGGER` to something other than `admin`
   
## Installing Craft

To install a clean version of Craft, simply run:

```makefile
make install
```

This will start your project, install Composer & npm, and then walk through a series of Craft commands to complete the installation process. Follow the prompts.

This command will:

1. Copy your local SSH keys into the container via `ddev auth ssh` (handy if you are setting up [craft-scripts](https://github.com/nystudio107/craft-scripts/))
2. Start your project via `ddev start`
3. Install Composer
4. Install npm
5. Do a one-time build of Vite
6. Generate `APP_ID` and save to your `.env` file
7. Generate `SECURITY_KEY` and save to your `.env` file
8. Installing Craft for the first time, allowing you to set the admin's account credentials
9. Install all Craft plugins

Once the process is complete, type `ddev launch` to open the project in your default browser. 🚀

## Local development with Vite

Once the project has been set up as per the above, simply run this from the terminal of your local machine's project `PATH` directory:

```makefile
make dev
```

This command will:

1. Copy your local SSH keys into the container via `ddev auth ssh` (handy if you are setting up [craft-scripts](https://github.com/nystudio107/craft-scripts/))
2. Start your project via `ddev start`
3. Run `composer install`
4. Run `npm install`
5. Spin up Vite server

Open up a browser to your project to verify that Vite is connected. Begin crafting beautiful things. ❤️

## Makefile

A Makefile has been included to provide a unified CLI for common development commands.

- `make install` - Runs a complete one-time process to set the project up and install Craft.
- `make up` - Starts the ddev project, ensuring that SSH keys have been added, and npm & Composer have been installed.
- `make dev` - Runs a one-time build of all front-end assets, then starts Vite's server for HMR.
- `make build` - Builds all front-end assets.
- `make composer xxx` - Run Composer commands inside the container, e.g. `make composer install`
- `make craft xxx` - Run Craft commands inside the container, e.g. `make craft project-config/touch`
- `make npm xxx` - Run npm commands inside the container, e.g. `make npm install`
- `make pull` - Pull remote db & assets (requires setting up [craft-scripts](https://github.com/nystudio107/craft-scripts/)

## Craft CMS Plugins

1. [Agnostic Fetch](https://plugins.craftcms.com/agnostic-fetch)
2. [Async Queue](https://plugins.craftcms.com/async-queue)
3. [CP Field Inspect](https://plugins.craftcms.com/cp-field-inspect)
4. [Craft Autocomplete](https://github.com/nystudio107/craft-autocomplete)
5. [Imager-X](https://imager-x.spacecat.ninja/)
6. [Knock Knock](https://plugins.craftcms.com/knock-knock)
7. [Postmark](https://plugins.craftcms.com/postmark)
8. [Redactor](https://plugins.craftcms.com/redactor)
9. [Seomatic](https://nystudio107.com/docs/seomatic/)
10. [Typed Link Field](https://plugins.craftcms.com/typedlinkfield)
11. [Vite](https://github.com/nystudio107/craft-vite)

## Tailwind Plugins

1. [Aspect Ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
1. [Line Clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
1. [Typography](https://github.com/tailwindlabs/tailwindcss-typography)

## Javascript Libraries

1. [AlpineJS](https://alpinejs.dev/)
1. [Lazysizes](https://afarkas.github.io/lazysizes/)

## Roadmap

- Continue to improve docs
- Bugfixes, new features

## Acknowledgements & Credits

Aside from the obvious gratitude owed to the entire team at [Pixel & Tonic](https://pixelandtonic.com/) for their tireless work on Craft, a special thanks goes out to Andrew Welch of [nystudio107](https://nystudio107.com/). Not only has he developed some of the most widely used plugins in the Craft ecosystem, he has dedicated countless time and energy to pushing all of us in the community to excel at everything we do. He has an uncanny ability to see through the fog of development war to know what's best - not just for us, but for our future selves, our clients, and the users of the sites we build. His contributions have made all of our sites perform better in SEO, run faster in the browser, and made our development workflow more streamlined and efficient. Hats off to you, sir. 
