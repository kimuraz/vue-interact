# ResizingMixin 

This Mixin implements the [resizable action](https://interactjs.io/docs/resizable) options as `props` for any component.

## Props

```vue
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
```

## Methods

- `init()`: responsible for instantiate the interact action using the `props` as options.
- `onMove(evt)`: triggered when it's being resized and the cursor is moving, it will set new sizes for the component (container) and emits `resizemove`.

> Note: all `evt` that each of the event methods receives, are the default event triggered by InteractJS.

## Watchers

This mixin implements a watcher for the `edge` prop, it will call the `init` method to re-instatiate the resizable options with the new values for `edge`.

