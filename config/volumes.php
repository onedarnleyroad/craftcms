<?php

return [
    'uploads' => [
        'hasUrls' => true,
        'url' => '$DEFAULT_SITE_URL/uploads',
        'type' => 'craft\volumes\Local',
        'path' => '@webroot/uploads',
    ],
    'userPhotos' => [
        'hasUrls' => true,
        'url' => '$DEFAULT_SITE_URL/userphotos',
        'type' => 'craft\volumes\Local',
        'path' => '@webroot/userphotos',
    ]
];
