module.exports = {
    title: 'un_rap',
    description: 'Falmouth’s first & only zero waste shop - designed to reduce impact on our planet & benefit the local community. Refill your containers with sustainable, eco-friendly products. From food & cleaning products, to lifestyle goods & toiletries.',
    head: [
        ['script', {
            src: '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js',
            'data-dojo-config': 'usePlainJson: true, isDebug: false',
        }],
        ['script', {}, `window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us10.list-manage.com","uuid":"49dffd2d0dbd0c861399a7325","lid":"efdc25d096","uniqueMethods":true}) })`],
        ['script', { type: 'application/ld+json' }, `
            {
                "@context": "http://schema.org",
                "@type": "Organization",
                "name": "un_rap",
                "url": "https://www.un-rap.co.uk",
                "sameAs": ["https:\/\/www.facebook.com\/unrapfalmouthuk\/"],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "1 Webber Hill",
                    "addressLocality": "Falmouth",
                    "addressRegion": "Cornwall",
                    "postalCode": "TR11 2TE",
                    "addressCountry": "United Kingdom"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer service",
                    "telephone": "+44 01326 123456",
                    "email": "info@un-rap.co.uk"
                }
            }
        `]
    ],
    plugins: [
        '@silvanite/tailwind',
        [
            '@silvanite/markdown-classes', {
                "rules": [
                    'blockquote_open',
                    'bullet_list_open',
                    'code_block',
                    'hardbreak',
                    'heading_open',
                    'hr',
                    'image',
                    'ordered_list_open',
                    'paragraph_open',
                    'softbreak',
                    'table_open',
                ]
            }
        ],
        [
            '@vuepress/medium-zoom', {
                selector: 'img.zoomable',
            }
        ],
    ],
}
