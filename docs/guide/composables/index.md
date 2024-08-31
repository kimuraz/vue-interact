### Composables

Currently the library provides the following composables:

```ts
import { useInteractContext } from 'vue-interact';
import { useDraggable } from 'vue-interact';
import { useResizable } from 'vue-interact';
```

:warning: **Important**: The `useInteractContext` must be used before the other composables.

The `useInteractContext` is an entry point for the other composables. It provides the `interactable` object which is used by the other composables.

Also it creates a single context to share among the other composables so you can use them together on the same element ref.

On this example the position and the resizeData are actually refs declared on the context and redirected by `useDraggable` and `useResizable` respectively.

```ts
import { nextTick, onMounted, ref } from 'vue';
import { useInteractContext, useDraggable, useResizable } from 'vue-interact';

const interactableTarget = ref(null);

const context = useInteractContext(interactableTarget);

const { init, position } = useDraggable(context);
const { init: initResize, resizeData } = useResizable(context);

onMounted(() => {
    nextTick(() => {
        init();
        initResize();
    });
});
```

On template:

```html
<div
    ref="interactableTarget"
    style="width: 100px; height: 100px; background-color: #29e;"
></div>
```

**Note**: Due to the dependency of having the element on the DOM to initialize the interactable object, it is recommended to use the `onMounted` lifecycle hook to initialize the composables.

#### Demo

<DemoUseDragAndResize/>
