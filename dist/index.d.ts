import { Plugin } from 'vue';
import { default as useInteractContext } from './composables/useInteractContext';
import { default as useDraggable } from './composables/useDraggable';
import { default as useResizable } from './composables/useResizable';
export interface IVueInteractOptions {
    installInject?: boolean;
    installGlobalProperty?: boolean;
}
declare const VueInteract: Plugin;
export { useInteractContext, useDraggable, useResizable };
export default VueInteract;
