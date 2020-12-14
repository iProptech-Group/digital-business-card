export default {
    generate: {
        fallback: '404.html',
        exclude: ['/admin/'],
    },
    head: {
        title: 'Property Station',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'property station',
                name: 'property station',
                content: 'property station'
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
            {
                src: '/js/main.js',
            },
        ],
    }
};
