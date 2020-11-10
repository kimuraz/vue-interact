module.exports = {
  serviceWorker: false,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Interact',
      description: 'A VueJS wrapper for InteractJS',
    },
  },
  themeConfig: {
    repo: 'kimuraz/vue-interact',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectTexts: 'Lang',
        nav: [
          {
            text: 'Mixins',
            items: [
              {
                text: 'DraggingMixin',
                link: '/mixins/dragging',
              },
              {
                text: 'ResizingMixin',
                link: '/mixins/resizing',
              },
            ],
          },
          {
            text: 'Directives',
            items: [
              {
                text: 'v-draggable',
                link: '/directives/draggable',
              },
            ],
          },
        ],
        sidebar: [
          '/introduction',
          '/setup',
          {
            title: 'Mixins',
            collapsable: false,
            children: [
              '/mixins/common',
              '/mixins/dragging',
              '/mixins/resizing',
            ],
          },
          {
            title: 'Directives',
            collapsable: false,
            children: ['/directives/draggable'],
          },
        ],
      },
    },
  },
};
