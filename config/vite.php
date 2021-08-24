<?php

use craft\helpers\App;

return [
	'checkDevServer' => true,
	'devServerInternal' => 'http://localhost:3000',
	'devServerPublic' => App::env('PRIMARY_SITE_URL') . ':3000',
	'errorEntry' => 'src/js/app.js',
	'manifestPath' => '@webroot/dist/manifest.json',
	'serverPublic' => App::env('PRIMARY_SITE_URL') . '/dist/',
	'useDevServer' => (bool) App::env('VITE_USE_DEV_SERVER'),
];
