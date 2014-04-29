Package.describe({
    summary: "(jQuery plugin) The last carousel you'll ever need"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/slick/slick/slick.js',
        'lib/slick/slick/slick.css',
        'lib/slick/slick/fonts/slick.eot',
        'lib/slick/slick/fonts/slick.svg',
        'lib/slick/slick/fonts/slick.ttf',
        'lib/slick/slick/fonts/slick.woff'
        ], 'client'
    );
});
