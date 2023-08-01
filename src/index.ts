import { App, Plugin } from 'vue';
import interact from 'interactjs';

export interface IVueInteractOptions {
  installCompositionInject?: boolean;
  installGlobalProperty?: boolean;
}

export const VueInteract : Plugin = {
  install: (app: App, options: IVueInteractOptions = {
    installCompositionInject: true,
    installGlobalProperty: true,
  }) => {
    if (!app) {
      throw new Error('VueInteract.install requires an app instance');
    }
    if (options.installCompositionInject) {
      app.provide('interact', interact);
    }

    if (options.installGlobalProperty) {
        app.config.globalProperties.$interact = interact;
    }
  },
};

export default VueInteract;
