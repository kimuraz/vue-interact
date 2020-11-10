import interact from 'interactjs';

var CommonMixin = {
  props: {
    max: {
      type: Number,
      required: false,
      default: Infinity,
    },
    maxPerElement: {
      type: [Number, String],
      required: false,
      default: '>= 2',
    },
    manualStart: {
      type: Boolean,
      required: false,
      default: false,
    },
    hold: {
      type: Number,
      required: false,
      default: 1000,
    },
    inertia: {
      type: Boolean,
      required: false,
      default: true,
    },
    autoScroll: {
      type: [Boolean, Object],
      required: false,
      default: true,
    },
    allowFrom: {
      type: String,
      required: false,
    },
    ignoreFrom: {
      type: String,
      required: false,
    },
    enabled: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};

var DraggingMixin = {
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

var ResizingMixin = {
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

const bind = (el, binding, vnode) => {
  const { arg, value } = binding;
  const className = arg || 'vue-interact-draggable';

  el.classList.add(className);

  const pos = { x: 0, y: 0 };

  const options = Object.assign(
    {
      listeners: {
        start(event) {
          vnode.context.$emit('start', event);
        },
        move(event) {
          pos.x += event.dx;
          pos.y += event.dy;

          // eslint-disable-next-line no-param-reassign
          el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
          vnode.context.$emit('move', event);
        },
      },
    },
    value,
  );

  interact(`.${className}`).draggable(options);
};

var draggable = { bind };

const VueInteract = {
  DraggingMixin,
  ResizingMixin,
  install: (Vue) => {
    if (Vue.vueInteractInstalled) {
      return;
    }

    // eslint-disable-next-line no-param-reassign
    Vue.vueInteractInstalled = true;

    Vue.directive('draggable', draggable);
  },
};

export default VueInteract;
export { DraggingMixin, ResizingMixin };
