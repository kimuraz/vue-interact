import { Directive } from 'vue';
import interact from 'interactjs';
import DraggingMixin from './mixins/DraggingMixin';
import ResizingMixin from './mixins/ResizingMixin';

import draggable from './directives/draggable';
import resizable from './directives/resizable';

export { DraggingMixin };
export { ResizingMixin };

const VueInteract: any = {
  install: (Vue: Vue) => {
    if (Vue.vueInteractInstalled) {
      return;
    }

    Vue.vueInteractInstalled = true;
    Vue.$interact = interact;

    Vue.directive('draggable', draggable as Directive);
    Vue.directive('resizable', resizable as Directive);
  },
};

export default VueInteract;
