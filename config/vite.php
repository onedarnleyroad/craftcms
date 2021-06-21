<?php

use craft\helpers\App;

return [
	'devServerPublic' => App::env('VITE_DEV_SERVER_PUBLIC'),
	'manifestPath' => '@webroot/dist/manifest.json',
	'serverPublic' => App::env('PRIMARY_SITE_URL') . '/dist/',
	'useDevServer' => (bool) App::env('VITE_USE_DEV_SERVER'),
];
