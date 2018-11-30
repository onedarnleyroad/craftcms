<?php

use function onedarnleyroad\env;

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

return [
    // Global settings
    '*' => [
        // Control Panel trigger word
        'cpTrigger' => env('CP_TRIGGER') ?: 'admin',

        // extend tokens to 1 week
        'defaultTokenDuration' => 'P1W',

        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => (bool) env('DEV_MODE', false),

        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,

        // Whether template caching via the cache tag should be enabled
        'enableTemplateCaching' => (bool) env('ENABLE_TEMPLATE_CACHING', true),

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // Prevents “Forgot Password” forms from revealing whether a valid email address was entered,
        // so even if the email was invalid, a “Password reset email sent” message will be displayed.
        'preventUserEnumeration' => true,

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => env('SECURITY_KEY'),

        // Do not identify ourselves as a Craft-powered website in server response headers
        'sendPoweredByHeader' => false,

        // Send all Craft emails to a test address?
        'testToEmailAddress' => env('TEST_TO_EMAIL_ADDRESS') ?: null,

        // remove username field
        'useEmailAsUsername' => true,
    ],

    // Development environment settings
    'develop' => [
        'isSystemOn' => false
    ],

    // Staging environment settings
    'staging' => [
        'isSystemOn' => false
    ],

    // Production environment settings
    // Avoid env() to "lock down" any setting
    'production' => [
        'allowUpdates' => false,
        'devMode' => false,
        'testToEmailAddress' => null
    ],
];
