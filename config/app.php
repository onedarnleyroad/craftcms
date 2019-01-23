<?php

use function onedarnleyroad\one\env;

/**
 * Yii Application Config
 *
 * Edit this file at your own risk!
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app.php and app.[web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 *
 * If you want to modify the application config for *only* web requests or
 * *only* console requests, create an app.web.php or app.console.php file in
 * your config/ folder, alongside this one.
 */

return [
    'modules' => [
        // 'one' => \onedarnleyroad\one\Module::class,
    ],
    // 'bootstrap' => ['one'],
    'components' => [
        'mailer' => function() {
            // Get the stored email settings
            $settings = \craft\helpers\App::mailSettings();

            // Override the transport adapter class
            $settings->transportType = \craft\mail\transportadapters\Smtp::class;

            // Override the transport adapter settings
            $settings->transportSettings = [
                'host' => 'smtp.postmarkapp.com',
                'port' => '25',
                'useAuthentication' => true,
                'username' => env('POSTMARK_TOKEN'),
                'password' => env('POSTMARK_TOKEN')
            ];

            // Create a Mailer component config with these settings
            $config = craft\helpers\App::mailerConfig($settings);

            // Instantiate and return it
            return Craft::createObject($config);
        }
    ]
];
