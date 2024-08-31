export default [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Getting Started',
    link: '/guide/getting_started.html'
  },
  {
    text: 'Composables',
    link: '/guide/composables/index.html',
    children: [
      { text: 'useDraggable', link: '/guide/composables/use_draggable.html' },
      { text: 'useResizable', link: '/guide/composables/use_resizable.html' },
    ],
  },
];
