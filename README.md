# onedarnleyroad/craftcms

Boilerplate Craft CMS set up for all One Darnley Road projects.

## Why???

Partly because it's fun to publish something that is "ours". But more importantly, it's to provide documentation and structure to "our way" of building a Craft site. Everyone has their own opinionated setups, and this is ours.

### But, why???

Here are some of the things we might do differently:

**1. We commit `vendor/` into our repo**

This matters because we cannot rely on composer's pre/post command scripts and/or other deployment hooks to make sure things are structured just so. For example, NYStudio107 has a great setup script (https://github.com/nystudio107/craft/blob/master/nys-setup) that creates a symlink to the craft-scripts folder. However, symlinks are not preserved in git. So for us to use craft-scripts (which we always do), these have to be created manually.

**2. We almost always use the same set of plugins to start with**

This doesn't take a lot of work, but it would be nice to consolidate this common setup into a single command.

**3. Cloning & setting up an existing project is a pain**

Even though "you only have to do it once", we do it once _a lot_. Create & configure `.env.php`; create and configure `craft-scripts/.env.sh`; pull down db & assets from upstream. It amounts to upwards of 15min that should be automated.

**4. Hopes for the future in Docker/DDEV/etc**

Right now we're all on MAMP Pro, and while that's _fine_, it means we're each responsible for the local environment setup for each project we work on. If we can wrap that into something like DDEV or Docker then that's one less thing to do when spinning up a new project.

**5. Our front-end build process is... complicate**

And while it probably would be "nice" if this was a separate package so that it could be leveraged outside of Craft, the reality is that _if_ we are doing something in Craft, we will definitely need our front-end build tool in place. And it's complicated, so having it purpose-built for our most common setup is ideal.

## Installation Instructions

### Step 1: Download Craft

#### Option 1 (Recommended): Setup via Composer

1. `composer create-project onedarnleyroad/craftcms <Path>`  

   _Tip: Use `composer create-project onedarnleyroad/craftcms:dev-master <Path>` to use latest commits from master_

#### Option 2: Manual setup

1. clone/download repo to local machine
2. delete `README.md`, `CHANGELOG.md` and `LICENSE.md`
3. delete `composer.json` and rename `composer.json.default` to `composer.json`
4. delete `.gitignore` and rename `.gitignore.default` to `.gitignore`
5. duplicate `.env.example` to `.env`
6. run `composer install`

### Step 2: Edit .env

1. Set `SECURITY_KEY` *
2. Set `CP_TRIGGER`
3. Set `TEST_TO_EMAIL_ADDRESS`
4. Set `DB_` credentials **

*\* For existing projects, obtain security key from project lead; to set up a new Security Key, follow https://docs.craftcms.com/v3/installation.html#step-3-set-a-security-key*

\*** The default Database values are compatible with DDEV environment. If you are planning to use DDEV, leave them as-is.*

### Step 3: Configure DDEV

We ship  `.ddev/config.yaml` with our preferred defaults, so all you should need to do is set the project name (which is used as the default hostname).

> `ddev config --project-name <HostName>`

### Ideal Usage:

#### Starting a new project from scratch:

1. `composer create-project onedarnleyroad/craftcms <Path>`
2. `cd <Path>`

_If using ddev...otherwise skip to .6_

3. `ddev config --project-name <HostName>`
4. `ddev start` (to ensure that craft can connect to a database)
5. `ddev ssh`

Finally...

6. `./craft setup`
7. `./onedarnleyroad setup`

#### Cloning an existing project for local environment

1. `git clone [...]`
2. `composer install`
3. `ddev config --project-name <HostName>`
2. `./onedarnleyroad setup`



### What `./onedarnleyroad setup` will do:

_Each major step should be optional_

- wizard to install common plugins
- copy contents of `./vendor/nystudio107/craft-scripts/scripts` to `./scripts`
- wizard to create `.env.sh`
- run `npm install`
- run `cd scripts && bash pull_db.sh && bash pull_assets.sh && cd ..`

## Roadmap:

- build shell script `onedarnleyroad setup`
- add front-end build tools
- add _errors template group
- add a front end login form
- add common configs for redactor
- add boilerplate mailer overrides

## Webpack to do:

- Use .env for some dev settings. eg:

```
# Webpack settings. 
WEBPACK_ON="false"
WEBPACK_PORT=9000
WEBPACK_HTTPS="true"
```

- Ensure these env are included in webpack, and make sure that the dev-server config is tidied up so that we aren't duplicating any settings and it's easier to get a handle on what the dev-mode settings are. 

## References:

- https://github.com/nystudio107/craft/blob/master/nys-setup
- https://nystudio107.com/blog/setting-up-a-craft-cms-3-project
- https://github.com/venveo/craft-boilerplate
- https://keepachangelog.com/en/1.0.0/
- https://jolicode.com/blog/what-you-need-to-know-about-environment-variables-with-php
- https://mattstauffer.com/blog/environment-specific-configuration-for-craftcms-using-phpdotenv/
- https://docs.craftcms.com/v3/config/app.html#mailer-component
- https://workingconcept.com/blog/mamp-pro-to-ddev

### 
