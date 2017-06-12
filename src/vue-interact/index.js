import interact from 'interact.js';

export default {
  props: {
    resizableOpt: {
      type: Object,
      required: false,
    },
    resizeClass: {
      type: String,
      required: false,
      default: '.interact',
    },
    resize: {
      type: Boolean,
      required: false,
      default: true,
    },
    drag: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  mounted() {
    const resizableSettings = {
      preserveAspectRatio: false,
      edges: { left: true, right: true, bottom: true, top: true },
    };
    const draggableSettings = {
      inertia: true,
      restrict: {
        restriction: 'parent',
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 0, right: 0 },
      },
      autoScroll: true,
      onmove: this.dragMoveListener,
    };
    interact(this.resizeClass)
      .resizable(this.resizableOpt ? this.resizableOpt : resizableSettings)
      .draggable(this.draggableOpt ? this.draggableOpt : draggableSettings)
      .on('resizemove', this.resizeListener);
  },
  methods: {
    resizeListener(event) {
      if (this.resize) {
        const target = event.target;

        target.style.width = `${event.rect.width}px`;
        target.style.height = `${event.rect.height}px`;
        this.$emit('onresize', event);
      }
    },
    dragMoveListener(event) {
      if (this.drag) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.webkitTransform = `translate(${x}px, ${y}px)`;
        target.style.transform = `translate(${x}px, ${y}px)`;

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        this.$emit('ondrag', event);
      }
    },
  },

};
