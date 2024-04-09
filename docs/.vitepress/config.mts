import { defineConfig } from 'vitepress'
import { nav, sidebar} from './relaConf/navbar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Caleb-Blog",
  base: '/Caleb-Blog/',
  description: "这是我的知识库！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.png',
    nav: nav, // 把定义的nav给替换进来
    sidebar: sidebar, // 把定义的sidebar给替换进来

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
