import { ResizableOptions } from '@interactjs/actions/resize/plugin';
import { InteractContext } from './useInteractContext';
declare const useResizable: (context: InteractContext, interactOptions: ResizableOptions) => {
    init: () => void;
    resizeData: import('vue').Ref<import('./useInteractContext').ISizeData>;
    position: import('vue').Ref<import('./useInteractContext').IPosition>;
    resizableOptions: import('vue').WritableComputedRef<ResizableOptions>;
    isResizing: import('vue').Ref<boolean>;
};
export default useResizable;
