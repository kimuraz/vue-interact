import { defineClientConfig } from '@vuepress/client';
import DemoUseDraggable from '../guide/composables/components/DemoUseDraggable.vue';
import DemoUseResizable from '../guide/composables/components/DemoUseResizable.vue';
import DemoUseDragAndResize from '../guide/composables/components/DemoUseDragAndResize.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('DemoUseDraggable', DemoUseDraggable);
    app.component('DemoUseResizable', DemoUseResizable);
    app.component('DemoUseDragAndResize', DemoUseDragAndResize);
  },
});
