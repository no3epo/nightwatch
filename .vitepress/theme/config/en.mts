import {enNav} from '../navbar/index.mts';
import {enSidebar} from '../sidebar/index.mts';
import type {DefaultTheme, LocaleSpecificConfig} from 'vitepress';

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        outline: {
            level: [2, 6],
            label: "目录"
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
    }
}
