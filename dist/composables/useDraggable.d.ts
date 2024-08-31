import { DraggableOptions } from '@interactjs/actions/drag/plugin';
import { InteractContext } from './useInteractContext';
export interface IPosition {
    x: number;
    y: number;
}
declare const useDraggable: (context: InteractContext, interactOptions?: DraggableOptions) => {
    init: () => void;
    position: import('vue').Ref<import('./useInteractContext').IPosition>;
    draggableOptions: import('vue').WritableComputedRef<DraggableOptions>;
    isDragging: import('vue').Ref<boolean>;
};
export default useDraggable;
