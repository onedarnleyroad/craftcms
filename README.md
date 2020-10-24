# onedarnleyroad/craftcms

Boilerplate Craft CMS set up for all One Darnley Road projects.

## Why???

Partly because it's fun to publish something that is "ours". But more importantly, it's to provide documentation and structure to "our way" of building a Craft site. Everyone has their own opinionated setups, and this is ours.

### But, why???

Here are some of the things we might do differently:

**1. We almost always use the same set of plugins to start with**

This doesn't take a lot of work, but it would be nice to consolidate this common setup into a single command.

**2. Cloning & setting up an existing project is a pain**

Even though "you only have to do it once", we do it once _a lot_. Create & configure `.env`; create and configure `craft-scripts/.env.sh`; pull down db & assets from upstream. It amounts to upwards of 15min that should be automated.

**3. We dev in DDEV**

We have adopted [DDEV](https://ddev.readthedocs.io/en/stable/) as our local development environment of choice, and its behaviour is well-suited to some boilerplating. Our documentation below embraces this as an inherent part of the stack. If we end up switching to Craft's [Nitro](https://github.com/craftcms/nitro), the below will change accordingly.

**5. Our front-end build process is... complicated**

And while it probably would be "nice" if this was a separate package so that it could be leveraged outside of Craft, the reality is that _if_ we are doing something in Craft, we will definitely need our front-end build tool in place. And it's complicated, so having it purpose-built for our most common setup is ideal.

## Installation Instructions

### Step 1: Download project & set up Craft

#### Option 1: via Composer

1. `composer create-project onedarnleyroad/craftcms <Path> --no-install`  

   _Tip: Use `composer create-project onedarnleyroad/craftcms:dev-master <Path>` to use latest commits from master. If this does not appear to work, run `composer clearcache` and try again._

2. `cd` into project `<Path>`
3. Run `ddev config` to set up VM
4. Run `ddev start` to start VM
5. Run `ddev ssh` to ssh into container
6. Run `composer install`
7. Run `./craft setup` to set up all the Craft things.

#### Option 2: Manual setup

1. clone/download repo to local machine
2. `cd` into project root
4. Run `composer run-script post-create-project-cmd` to delete project files and prepare default files
5. Run `ddev config` to set up VM
6. Run `ddev start` to start VM
7. Run `ddev ssh` to ssh into container
8. Run `composer install` to install composer & packages
9. Run `./craft setup` to set up all the Craft things.

### Step 2: Edit .env

Out of the box, the values copied from `.env.default`, combined with running `./craft welcome` and `./craft/setup` will get you 99% of the way to being ready to go. All that's left now is to:

1. Set `CP_TRIGGER` (defaults to `admin`)
2. Set `PRIMARY_SITE_URL`

### Ideal Usage:

#### Starting a new project from scratch:

1. `composer create-project onedarnleyroad/craftcms <Path>`
2. `cd <Path>`



3. `ddev config --project-name <HostName>`
4. `ddev start` (to ensure that craft can connect to a database)
5. `ddev ssh`

Then once in your container...

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
