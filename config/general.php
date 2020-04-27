<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

return [
    'aliases' => [
        '@web' => getenv('DEFAULT_SITE_URL'),
        '@webroot' => dirname(__DIR__) . '/web',
    ],
    'allowUpdates' => (bool) getenv('ALLOW_UPDATES'),
    'allowAdminChanges' => (bool) getenv('ALLOW_ADMIN_CHANGES'),
    'backupOnUpdate' => (bool) getenv('BACKUP_ON_UPDATE'),
    'cpTrigger' => getenv('CP_TRIGGER') ?: 'admin',
    'defaultTokenDuration' => 'P1W',
    'defaultWeekStartDay' => 0,
    'devMode' => (bool) getenv('DEV_MODE'),
    'enableCsrfProtection' => true,
    'enableGql' => false,
    'enableTemplateCaching' => (bool) getenv('ENABLE_TEMPLATE_CACHING'),
    'errorTemplatePrefix' => "_errors/",
    'imageDriver' => getenv('IMAGE_DRIVER'),
    'isSystemLive' => (bool) getenv('IS_SYSTEM_LIVE'),
    'maxRevisions' => 3,
    'omitScriptNameInUrls' => true,
    'preserveCmykColorspace' => true,
    'preserveImageColorProfiles' => true,
    'preventUserEnumeration' => true,
    'runQueueAutomatically' => false,
    'securityKey' => getenv('SECURITY_KEY'),
    'testToEmailAddress' => getenv('TEST_TO_EMAIL_ADDRESS') ?: null,
    'timezone' => 'UTC',
    'transformGifs' => false,
    'useEmailAsUsername' => true,
    'useProjectConfigFile' => true,
];
