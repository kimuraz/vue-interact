import type { App, Plugin } from 'vue';
import interact from 'interactjs';
import useInteractContext from './composables/useInteractContext';
import useDraggable from './composables/useDraggable';
import useResizable from './composables/useResizable';

export interface IVueInteractOptions {
  installInject?: boolean;
  installGlobalProperty?: boolean;
}

const VueInteract: Plugin = {
  install: (app: App, options: IVueInteractOptions = {
    installInject: true,
    installGlobalProperty: true,
  }) => {
    if (!app) {
      throw new Error('VueInteract.install requires an app instance');
    }
    if (options.installInject) {
      app.provide('interact', interact);
    }

    if (options.installGlobalProperty) {
      app.config.globalProperties.$interact = interact;
    }
  },
};

export { useInteractContext, useDraggable, useResizable };
export default VueInteract;
