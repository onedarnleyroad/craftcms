<?php

return [
	'enabled' => (bool) getenv('KNOCK_KNOCK_IS_ENABLED'),
	'password' => getenv('KNOCK_KNOCK_PASSWORD'),
];
