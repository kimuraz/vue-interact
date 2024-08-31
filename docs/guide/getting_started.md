# Installation

This plugin is compatible with `VueJS >= 3`

The version is currently using InteractJS `1.10.x`

## Adding it to your project

```bash
npm i vue-interact
```

## Using the plugin

```ts
import VueInteract from 'vue-interact';

const app = createApp(App);
app.use(VueInteract, {
    installGlobalProperty: true,
    installInject: true,
});
```

### Options

```ts
export interface IVueInteractOptions {
    installInject?: boolean;
    installGlobalProperty?: boolean;
}
```

When `installGlobalProperty` is `true` will register the plugin globally as `$interact`.

When `installInject` is `true` will register the plugin as `interact` in the `provide/inject` system.

Both instances are merely the default InteractJS instance.

> Check the documentation for the InteractJS instance [here](https://interactjs.io/docs/interactjs/).

> Check the documentation for composables [here](/guide/composables/use_draggable.html)
