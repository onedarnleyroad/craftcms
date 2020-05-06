<?php

/**
 * @copyright Copyright (c) PutYourLightsOn
 */

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

return [
	'cacheDuration' => '0',
	'cacheElementQueries' => true,
	'cacheElements' => true,
	'cachePurgerType' => 'putyourlightson\blitz\drivers\purgers\CloudflarePurger',
	'cachePurgerSettings' => [
		'apiKey' => getenv('CLOUDFLARE_API_KEY'),
		'email' => getenv('CLOUDFLARE_EMAIL'),
		'warmCacheDelay' => 5,
		'zoneIds' => [
			'UUID_REPLACE_ME' => [
				'zoneId' => getenv('CLOUDFLARE_ZONE_ID')
			]
		]
	],
	'cacheStorageSettings' => [
		'createGzipFiles' => false,
		'folderPath' => '@webroot/cache/blitz'
	],
	'cachingEnabled' => (bool) getenv('BLITZ_CACHING_ENABLED'),
	'clearCacheAutomatically' => true,
	'debug' => (bool) getenv('BLITZ_DEBUG'),
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
