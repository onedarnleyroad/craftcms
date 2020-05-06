<?php

return [
	'cacheDuration' => false,
	'cacheDurationRemoteFiles' => false,
	'cacheEnabled' => true,
	'imagerSystemPath' => '@webroot/imager/',
	'imagerUrl' => '@web/imager/',
	'imgixAPIKey' => getenv('IMGIX_API_KEY'),
	'imgixConfig' => [
		'default' => [
			'domain' => getenv('IMGIX_DOMAIN'),
			'useHttps' => true,
			'signKey' => getenv('IMGIX_SIGN_KEY'),
			'sourceIsWebProxy' => false,
			'useCloudSourcePath' => false,
			'shardStrategy' => 'cycle',
			'getExternalImageDimensions' => false,
			'defaultParams' => [
				'auto' => 'compress,format'
			],
		],
	],
	'imgixProfile' => 'default',
	'transformer' => getenv('IMAGER_TRANSFORMER') ?: 'craft',
];
