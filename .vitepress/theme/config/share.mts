import {defineConfig} from 'vitepress';

export const sharedConfig = defineConfig({
    srcDir: 'docs',
    base: '/nightwatch/',

    themeConfig: {
        search: {
            provider: 'local'
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/no3epo/nightwatch'}
        ],

        editLink: {
            pattern: 'https://github.com/no3epo/nightwatch/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        }
    },
})
