<?php

use function onedarnleyroad\one\env;

// @var $isProduction boolean
$isProduction = env('ENVIRONMENT') == 'production';

return [
	// The public-facing name of the plugin
	'pluginName' => 'SEO',

	// Should the meta generator tag and X-Powered-By header be included?
    'generatorEnabled' => false,

    // Should SEOmatic render frontend sitemaps?
    'sitemapsEnabled' => $isProduction ? true : false,

    // The server environment, either `live`, `staging`, or `local`
    'environment' => $isProduction ? 'live' : 'local',
];
