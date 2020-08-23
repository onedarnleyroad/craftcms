<?php

use craft\helpers\App;

return [
	'enabled' => (bool) App::env('KNOCK_KNOCK_IS_ENABLED'),
	'password' => App::env('KNOCK_KNOCK_PASSWORD'),
];
