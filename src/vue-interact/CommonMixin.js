export default {
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
