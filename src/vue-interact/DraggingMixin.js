import interact from 'interactjs';

export default {
  props: {
    draggingClass: {
      type: String,
      required: false,
      default: '.draggable',
    },
    inertia: {
      type: Boolean,
      required: false,
      default: true,
    },
    autoScroll: {
      type: Boolean,
      required: false,
      default: true,
    },
    lockAxis: {},
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
    interact(this.draggingClass).draggable({
      inertia: this.inertia,
      modifiers: this.modifiers,
      autoScroll: this.autoScroll,
      onstart: this.onStart,
      onmove: this.onMove,
      onend: this.onEnd,
      oninertiastart: this.onInertiaStart,
    });
  },
  methods: {
    onStart(evt) {
      this.$emit('dragstart', evt);
    },
    onMove(evt) {
      this.$emit('dragmove', evt);
    },
    onEnd(evt) {
      this.$emit('dragend', evt);
    },
    onInertiaStart(evt) {
      this.$emit('draginertiastart', evt);
    },
  },
};
