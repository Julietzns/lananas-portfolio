import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/lananas-portfolio/__docusaurus/debug',
    component: ComponentCreator('/lananas-portfolio/__docusaurus/debug', 'fe7'),
    exact: true
  },
  {
    path: '/lananas-portfolio/__docusaurus/debug/config',
    component: ComponentCreator('/lananas-portfolio/__docusaurus/debug/config', '35e'),
    exact: true
  },
  {
    path: '/lananas-portfolio/__docusaurus/debug/content',
    component: ComponentCreator('/lananas-portfolio/__docusaurus/debug/content', '233'),
    exact: true
  },
  {
    path: '/lananas-portfolio/__docusaurus/debug/globalData',
    component: ComponentCreator('/lananas-portfolio/__docusaurus/debug/globalData', 'c9b'),
    exact: true
  },
  {
    path: '/lananas-portfolio/__docusaurus/debug/metadata',
    component: ComponentCreator('/lananas-portfolio/__docusaurus/debug/metadata', '536'),
    exact: true
  },
  {
    path: '/lananas-portfolio/__docusaurus/debug/registry',
    component: ComponentCreator('/lananas-portfolio/__docusaurus/debug/registry', '811'),
    exact: true
  },
  {
    path: '/lananas-portfolio/__docusaurus/debug/routes',
    component: ComponentCreator('/lananas-portfolio/__docusaurus/debug/routes', 'bc0'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog',
    component: ComponentCreator('/lananas-portfolio/blog', '0d0'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog/archive',
    component: ComponentCreator('/lananas-portfolio/blog/archive', '7f1'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog/first-blog-post',
    component: ComponentCreator('/lananas-portfolio/blog/first-blog-post', 'd55'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog/long-blog-post',
    component: ComponentCreator('/lananas-portfolio/blog/long-blog-post', 'a7a'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog/mdx-blog-post',
    component: ComponentCreator('/lananas-portfolio/blog/mdx-blog-post', '087'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog/tags',
    component: ComponentCreator('/lananas-portfolio/blog/tags', 'a0e'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog/tags/docusaurus',
    component: ComponentCreator('/lananas-portfolio/blog/tags/docusaurus', 'e45'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog/tags/facebook',
    component: ComponentCreator('/lananas-portfolio/blog/tags/facebook', '06e'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog/tags/hello',
    component: ComponentCreator('/lananas-portfolio/blog/tags/hello', '656'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog/tags/hola',
    component: ComponentCreator('/lananas-portfolio/blog/tags/hola', '122'),
    exact: true
  },
  {
    path: '/lananas-portfolio/blog/welcome',
    component: ComponentCreator('/lananas-portfolio/blog/welcome', '86a'),
    exact: true
  },
  {
    path: '/lananas-portfolio/markdown-page',
    component: ComponentCreator('/lananas-portfolio/markdown-page', '910'),
    exact: true
  },
  {
    path: '/lananas-portfolio/docs',
    component: ComponentCreator('/lananas-portfolio/docs', 'ace'),
    routes: [
      {
        path: '/lananas-portfolio/docs/category/tutorial---basics',
        component: ComponentCreator('/lananas-portfolio/docs/category/tutorial---basics', '962'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lananas-portfolio/docs/category/tutorial---extras',
        component: ComponentCreator('/lananas-portfolio/docs/category/tutorial---extras', '459'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lananas-portfolio/docs/intro',
        component: ComponentCreator('/lananas-portfolio/docs/intro', '834'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lananas-portfolio/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/lananas-portfolio/docs/tutorial-basics/congratulations', '6ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lananas-portfolio/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/lananas-portfolio/docs/tutorial-basics/create-a-blog-post', '888'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lananas-portfolio/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/lananas-portfolio/docs/tutorial-basics/create-a-document', '1ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lananas-portfolio/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/lananas-portfolio/docs/tutorial-basics/create-a-page', 'fc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lananas-portfolio/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/lananas-portfolio/docs/tutorial-basics/deploy-your-site', '1b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lananas-portfolio/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/lananas-portfolio/docs/tutorial-basics/markdown-features', '185'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lananas-portfolio/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/lananas-portfolio/docs/tutorial-extras/manage-docs-versions', '2e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/lananas-portfolio/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/lananas-portfolio/docs/tutorial-extras/translate-your-site', '427'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/lananas-portfolio/',
    component: ComponentCreator('/lananas-portfolio/', '611'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
