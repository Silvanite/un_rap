module.exports = {
    title: 'un_rap',
    description: 'Falmouth’s first & only zero waste shop - designed to reduce impact on our planet & benefit the local community. Refill your containers with sustainable, eco-friendly products. From food & cleaning products, to lifestyle goods & toiletries.',
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
