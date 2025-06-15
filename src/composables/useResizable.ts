import Interact from '@interactjs/types/index';

import { computed, ref } from 'vue';
import { ResizableOptions } from '@interactjs/actions/resize/plugin';
import { InteractContext } from './useInteractContext';

const useResizable = (
    context: InteractContext,
    interactOptions: ResizableOptions = {},
) => {
    const isResizing = ref<boolean>(false);
    const position = context.position;
    const resizeData = context.size;
    const _interactOptions = ref<ResizableOptions>(interactOptions);

    let resizable: Interact.Interactable;

    const onResizeStart = (event: Interact.ResizeEvent) => {
        isResizing.value = true;
    };

    const onResizeMove = (event: Interact.ResizeEvent) => {
        const x = position.value.x + (event.deltaRect?.left || 0);
        const y = position.value.y + (event.deltaRect?.top || 0);

        Object.assign(event.target.style, {
            width: `${event.rect.width}px`,
            height: `${event.rect.height}px`,
            transform: `translate(${x}px, ${y}px)`,
        });
        resizeData.value = {
            width: event.rect.width,
            height: event.rect.height,
        };
        position.value = {
            x,
            y,
        };
    };

    const onResizeEnd = (event: Interact.ResizeEvent) => {
        isResizing.value = false;
    };

    const staticListeners = {
        start: onResizeStart,
        move: onResizeMove,
        end: onResizeEnd,
    };
    const defaultEdges = {
        left: true,
        right: true,
        bottom: true,
        top: true,
    };

    const resizableOptions = computed<ResizableOptions>({
        get: () => ({
            edges: { ...defaultEdges },
            listeners: staticListeners,
            ..._interactOptions.value,
        }),
        set: (value) => {
            _interactOptions.value = value;
            resizable.set({
                resize: {
                    edges: { ...defaultEdges },
                    listeners: staticListeners,
                    ..._interactOptions.value,
                },
            });
        },
    });

    const init = () => {
        if (!context.interactable.value) {
            throw new Error('Interactable context is not set');
        }
        resizable = context.interactable.value.resizable(
            resizableOptions.value,
        );
    };

    return {
        init,
        resizeData,
        position,
        resizableOptions,
        isResizing,
    };
};

export default useResizable;
