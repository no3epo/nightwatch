import {defineConfig} from 'vitepress'
import {sharedConfig} from './theme/config/share.mts'
import {zhConfig} from './theme/config/zh.mts'
import {enConfig} from './theme/config/en.mts'

export default defineConfig({
    ...sharedConfig,

    locales: {
        zh: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/zh/',
            ...zhConfig
        },
        en: {
            label: 'English',
            lang: 'en',
            link: '/en/',
            ...enConfig
        }
    }
})
