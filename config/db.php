<?php

use function onedarnleyroad\one\env;

/**
 * Database Configuration
 *
 * All of your system's database connection settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/DbConfig.php.
 *
 * @see craft\config\DbConfig
 */

return [
    'driver' => env('DB_DRIVER'),
    'server' => env('DB_SERVER'),
    'user' => env('DB_USER'),
    'password' => env('DB_PASSWORD'),
    'database' => env('DB_DATABASE'),
    'schema' => env('DB_SCHEMA'),
    'tablePrefix' => env('DB_TABLE_PREFIX'),
    'port' => env('DB_PORT')
];
