import interact from 'interactjs';
import CommonMixin from './CommonMixin';

export default {
  mixins: [CommonMixin],
  props: {
    resizingClass: {
      type: String,
      required: false,
      default: 'resizable',
    },
    edges: {
      type: Object,
      required: false,
      default: () => ({
        top: true,
        right: true,
        bottom: true,
        left: true,
      }),
    },
    invert: {
      type: String,
      required: false,
      default: 'reposition',
    },
    modifiers: {
      type: Array,
      required: false,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      interact(`.${this.resizingClass}`)
        .resizable({
          edges: this.edges,
          modifiers: this.modifiers,
        })
        .on('resizemove', this.onMove);
    },
    onMove(evt) {
      this.$emit('resizemove', evt);
      const { target } = evt;
      let x = parseFloat(target.getAttribute('data-x')) || 0;
      let y = parseFloat(target.getAttribute('data-y')) || 0;

      target.style.width = `${evt.rect.width}px`;
      target.style.height = `${evt.rect.height}px`;

      x += evt.deltaRect.left;
      y += evt.deltaRect.top;

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    },
  },
  watch: {
    edges: {
      deep: true,
      handler() {
        this.init();
      },
    },
  },
};
