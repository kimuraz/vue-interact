import DraggingMixin from './mixins/DraggingMixin';
import ResizingMixin from './mixins/ResizingMixin';

import draggable from './directives/draggable';
import resizable from './directives/resizable';

export { DraggingMixin };
export { ResizingMixin };

const VueInteract = {
  DraggingMixin,
  ResizingMixin,
  install: (Vue) => {
    if (Vue.vueInteractInstalled) {
      return;
    }

    Vue.vueInteractInstalled = true;

    Vue.directive('draggable', draggable);
    Vue.directive('resizable', resizable);
  },
};

export default VueInteract;
