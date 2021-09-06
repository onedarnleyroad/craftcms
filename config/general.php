<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
    'aliases' => [
        '@web' => rtrim(APP::env('PRIMARY_SITE_URL'), '/'),
        '@webroot' => dirname(__DIR__) . '/web',
    ],
    'allowUpdates' => (bool) App::env('ALLOW_UPDATES'),
    'allowAdminChanges' => (bool) App::env('ALLOW_ADMIN_CHANGES'),
    'backupOnUpdate' => (bool) App::env('BACKUP_ON_UPDATE'),
    'cpTrigger' => App::env('CP_TRIGGER') ?: 'admin',
	'defaultSearchTermOptions' => [
		'subLeft' => true,
		'subRight' => true,
	],
    'defaultTokenDuration' => 'P1W',
    'defaultWeekStartDay' => 0,
    'devMode' => (bool) App::env('DEV_MODE'),
    'enableGql' => false,
    'enableTemplateCaching' => (bool) App::env('ENABLE_TEMPLATE_CACHING'),
    'imageDriver' => App::env('IMAGE_DRIVER'),
    'isSystemLive' => (bool) App::env('IS_SYSTEM_LIVE'),
    'maxRevisions' => 3,
    'omitScriptNameInUrls' => true,
    'preserveCmykColorspace' => true,
    'preserveImageColorProfiles' => true,
    'preventUserEnumeration' => true,
    'securityKey' => App::env('SECURITY_KEY'),
    'testToEmailAddress' => App::env('TEST_TO_EMAIL_ADDRESS') ?: null,
    'timezone' => 'UTC',
    'transformGifs' => false,
    'useEmailAsUsername' => true,
];
