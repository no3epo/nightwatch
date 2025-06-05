import {defineConfig} from 'vitepress';

export default defineConfig({
    title: "Night` Watch",
    description: "A VitePress Site",
    srcDir: 'docs',
    base: '/nightwatch/',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/no3epo/nightwatch'}
        ]
    }
})
