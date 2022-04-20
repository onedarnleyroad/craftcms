<?php

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

use modules\sitemodule\SiteModule;

use craft\helpers\App;
use craft\mail\transportadapters\Smtp;
use craft\queue\Queue;

return [
    '*' => [
	'components' => [
		'deprecator' => [
			'throwExceptions' => (bool) APP::env('HARD_MODE'),
		],
		'queue' => [
			'class' => Queue::class,
			'ttr' => 15 * 60,
		],
	],
	'id' => App::env('APP_ID') ?: 'CraftCMS',
        'modules' => [
            'site-module' => SiteModule::class,
        ],
        'bootstrap' => ['site-module'],
    ],
    'local' => [
        'components' => [
            'mailer' => static function() {
                $settings = App::mailSettings();

                $settings->transportType = Smtp::class;

                $settings->transportSettings = [
                    'host' => APP::env('SMTP_HOST'),
                    'port' => APP::env('SMTP_PORT'),
                    'username' => APP::env('SMTP_USERNAME'),
                    'password' => APP::env('SMTP_PASSWORD'),
                    'useAuthentication' => true,
                ];

                $config = App::mailerConfig($settings);

                try
                {
                    return Craft::createObject($config);
                }
                catch(Exception $exception)
                {
                    return null;
                }
            },
        ],
    ],
];
