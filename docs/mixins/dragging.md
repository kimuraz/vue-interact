# DraggingMixin

This Mixin implements the [draggable action](https://interactjs.io/docs/draggable) options as `props` for any component.

## Props

Each prop follows the name as on InteractJS.

> The only exception is `draggingClass` that allows you to set a new `css class` that will be used on the action.

```vue
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
```

## Methods

- `init()`: responsible for instantiate the interact action using the `props` as options.
- `onStart(evt)`: triggered when dragging starts, it will emit `dragstart`.
- `onMove(evt)`: triggered when it's being dragged and the cursor is moving, it will drag the element around (using styles as on interacjs) and emits `dragmove`.
- `onEnd(evt)`: triggered when dragging stops. 
- `onInertiaStart(evt)`: triggered after intertia stops, this is only triggered when `inertia` (from `CommonMixin`) prop is set to `true`.

> Note: all `evt` that each of the event methods receives, are the default event triggered by InteractJS.
 

## Watchers

By default, the mixin watches `lockAxis` prop, when it changes the `init` method is triggered and will cause the element to set `lockAxis` on the action with the new value.
