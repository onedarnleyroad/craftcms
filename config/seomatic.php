<?php

// @var $isProduction boolean
$isProduction = env('ENVIRONMENT') == 'production';

return [
	'pluginName' => 'SEO',

    // Should SEOmatic render frontend sitemaps?
    'sitemapsEnabled' => $isProduction ? true : false,

    // The server environment, either `live`, `staging`, or `local`
    'environment' => $isProduction ? 'live' : 'local',
];
