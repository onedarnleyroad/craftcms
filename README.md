# onedarnleyroad/craftcms

Boilerplate Craft CMS set up for all One Darnley Road projects.

## Why???

Partly because it's fun to publish something that is "ours". But more importantly, it's to provide documentation and structure to "our way" of building a Craft site. Everyone has their own opinionated setups, and this is ours.

### But, why???

Here are some of the things we might do differently:

#### 1. We commit `vendor/` into our repo

This matters because we cannot rely on composer's pre/post command scripts and/or other deployment hooks to make sure things are structured just so. For example, NYStudio107 has a great setup script (https://github.com/nystudio107/craft/blob/master/nys-setup) that creates a symlink to the craft-scripts folder. However, symlinks are not preserved in git. So for us to use craft-scripts (which we always do), these have to be created manually.

#### 2. We almost always use the same set of plugins to start with

This doesn't take a lot of work, but it would be nice to consolidate this common setup into a single command.

#### 3. Cloning & setting up an existing project is a pain

Even though "you only have to do it once", we do it once _a lot_. Create & configure `.env.php`; create and configure `craft-scripts/.env.sh`; pull down db & assets from upstream. It amounts to upwards of 15min that should be automated.

#### 4. Hopes for the future in Docker/DDEV/etc

Right now we're all on MAMP Pro, and while that's _fine_, it means we're each responsible for the local environment setup for each project we work on. If we can wrap that into something like DDEV or Docker then that's one less thing to do when spinning up a new project.

#### 5. Our front-end build process is... complicate

And while it probably would be "nice" if this was a separate package so that it could be leveraged outside of Craft, the reality is that _if_ we are doing something in Craft, we will definitely need our front-end build tool in place. And it's complicated, so having it purpose-built for our most common setup is ideal.


## Roadmap

A lot. We've barely begun.

References:

- https://github.com/nystudio107/craft/blob/master/nys-setup
- https://nystudio107.com/blog/setting-up-a-craft-cms-3-project
- https://github.com/venveo/craft-boilerplate
- https://keepachangelog.com/en/1.0.0/
- https://jolicode.com/blog/what-you-need-to-know-about-environment-variables-with-php
- https://mattstauffer.com/blog/environment-specific-configuration-for-craftcms-using-phpdotenv/
- https://docs.craftcms.com/v3/config/app.html#mailer-component
- https://workingconcept.com/blog/mamp-pro-to-ddev

### Ideal Usage:

#### Starting a new project from scratch:

1. `composer create-project onedarnleyroad/craftcms [PATH]`
2. `./craft setup`
3. `./onedarnleyroad setup`

#### Cloning an existing project for local environment

1. `git clone [...]`
2. `./onedarnleyroad setup`



### What `./onedarnleyroad setup` will do:

_Each major step should be optional_

- install plugin(s)
- copy contents of `./vendor/nystudio107/craft-scripts/scripts` to `./scripts`
- create `.env.sh` based off the contents of `.env.php`
- run `npm install`
- run `cd scripts && bash pull_db.sh && bash pull_assets.sh && cd ..`

### To Do:

- build shell script `onedarnleyroad setup`
- add front-end build tools
- add _errors template group
- add a front end login form
- add common configs for redactor
- add boilerplate mailer overrides
  
