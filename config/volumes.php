<?php

return [
    'uploads' => [
        'hasUrls' => true,
        'url' => '@web/uploads',
        'type' => 'craft\volumes\Local',
        'path' => '@webroot/uploads',
    ],
    'userPhotos' => [
        'hasUrls' => true,
        'url' => '@web/userphotos',
        'type' => 'craft\volumes\Local',
        'path' => '@webroot/userphotos',
    ]
];
