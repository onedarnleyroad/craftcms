<?php

/**
 * Blitz config.php
 *
 * This file exists only as a template for the Blitz settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'blitz.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

use craft\helpers\App;

return [
	'cacheDuration' => '0',
	'cacheElementQueries' => true,
	'cacheElements' => true,
	'cachePurgerType' => 'putyourlightson\blitz\drivers\purgers\CloudflarePurger',
	'cachePurgerSettings' => [
		'apiKey' => App::env('CLOUDFLARE_API_KEY'),
		'email' => App::env('CLOUDFLARE_EMAIL'),
		'warmCacheDelay' => 5,
		'zoneIds' => [
			'UUID_REPLACE_ME' => [
				'zoneId' => App::env('CLOUDFLARE_ZONE_ID')
			]
		]
	],
	'cacheStorageSettings' => [
		'createGzipFiles' => false,
		'folderPath' => '@webroot/cache/blitz'
	],
	'cachingEnabled' => (bool) App::env('BLITZ_CACHING_ENABLED'),
	'clearCacheAutomatically' => true,
	'debug' => (bool) App::env('BLITZ_DEBUG'),
	'includedUriPatterns' => [
		[
			'siteId' => 1,
			'uriPattern' => '*',
		],
	],
	'excludedUriPatterns' => [
		[
			'siteId' => 1,
			'uriPattern' => '^csrf',
		],
		[
			'siteId' => 1,
			'uriPattern' => '^knock-knock',
		],
	],
	'queryStringCaching' => 2,
	'warmCacheAutomatically' => false,
];
