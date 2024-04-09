export * from './navbar';

import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '个人成长',
    items: [
      {
        text: '所思·所想',
        link: '/column/Growing/' // 表示docs/column/Growing/index.md
      }
    ]
  },
  {
    text: '前端开发',
    items: [
      {
        text: '算法',
        link: '/column/Algorithm/'
      }
    ]
  },
  {
    text: '关于我',
    items: [
      {
        text: 'CSDN',
        link: 'https://blog.csdn.net/weixin_48576413?type=blog'
      }
    ]
  }
];

export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/Algorithm/': [
     // 第一部分
    {
      text: '栈和队列',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/column/Algorithm/001'
        },
        {
          text: '队列-事件循环',
          link: '/column/Algorithm/002'
        }
      ]
    },
    // 第二部分
    {
      text: '字典和树',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/column/Algorithm/003'
        },
      ]
    }
  ]
};