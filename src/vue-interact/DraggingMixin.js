import interact from 'interactjs';
import CommonMixin from './CommonMixin';

export default {
  mixins: [CommonMixin],
  props: {
    draggingClass: {
      type: String,
      required: false,
      default: 'draggable',
    },
    startAxis: {
      type: String,
      required: false,
      default: 'xy',
    },
    lockAxis: {
      type: String,
      required: false,
      default: 'xy',
    },
    modifiers: {
      type: Array,
      required: false,
      default: () => [
        interact.modifiers.restrict({
          restriction: 'parent',
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        }),
      ],
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      interact(`.${this.draggingClass}`).draggable({
        inertia: this.inertia,
        modifiers: this.modifiers,
        autoScroll: this.autoScroll,
        onstart: this.onStart,
        onmove: this.onMove,
        onend: this.onEnd,
        oninertiastart: this.onInertiaStart,
        startAxis: this.startAxis,
        lockAxis: this.lockAxis,
      });
    },
    onStart(evt) {
      this.$emit('dragstart', evt);
    },
    onMove(evt) {
      this.$emit('dragmove', evt);

      const { target } = evt;
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + evt.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + evt.dy;

      target.style.webkitTransform = `translate(${x}px, ${y}px)`;
      target.style.transform = `translate(${x}px, ${y}px)`;

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    },
    onEnd(evt) {
      this.$emit('dragend', evt);
    },
    onInertiaStart(evt) {
      this.$emit('draginertiastart', evt);
    },
  },
  watch: {
    lockAxis: {
      deep: true,
      handler() {
        this.init();
      },
    },
  },
};
