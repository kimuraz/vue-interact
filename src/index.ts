import { App, Plugin } from 'vue';
import interact from 'interactjs';
import useDraggable from "./composables/useDraggable";

export interface IVueInteractOptions {
  installInject?: boolean;
  installGlobalProperty?: boolean;
}

export const VueInteract : Plugin = {
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

export { useDraggable };
export default VueInteract;
