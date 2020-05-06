<?php

return [
    'uploads' => [
        'hasUrls' => true,
        'url' => '@web/volumes/uploads',
        'type' => 'craft\volumes\Local',
        'path' => '@webroot/volumes/uploads',
    ],
    'userPhotos' => [
        'hasUrls' => true,
        'url' => '@web/volumes/userphotos',
        'type' => 'craft\volumes\Local',
        'path' => '@webroot/volumes/userphotos',
    ]
];
