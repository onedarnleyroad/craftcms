<?php

use craft\helpers\App;

return [
	'cacheDuration' => false,
	'cacheDurationRemoteFiles' => false,
	'cacheEnabled' => true,
	'imagerSystemPath' => '@webroot/cache/imager/',
	'imagerUrl' => '@web/cache/imager/',
	'imgixAPIKey' => App::env('IMGIX_API_KEY'),
	'imgixConfig' => [
		'default' => [
			'domain' => App::env('IMGIX_DOMAIN'),
			'useHttps' => true,
			'signKey' => App::env('IMGIX_SIGN_KEY'),
			'sourceIsWebProxy' => false,
			'useCloudSourcePath' => false,
			'getExternalImageDimensions' => false,
			'defaultParams' => [
				'auto' => 'compress,format'
			],
		],
	],
	'imgixProfile' => 'default',
	'transformer' => App::env('IMAGER_TRANSFORMER') ?: 'craft',
];
