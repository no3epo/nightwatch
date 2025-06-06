import {DefaultTheme} from 'vitepress';

export const zhSidebar: DefaultTheme.Sidebar = {
    '/zh/': [{
        text: '示例', // 注意：这里使用了您原始配置中的 'Examples'，您可能想改为 '示例'
        items: [
            {text: 'Markdown 示例', link: '/zh/markdown-examples'}, // 假设您有这些文件
            {text: 'API 示例', link: '/zh/api-examples'}
        ]
    }]
}
