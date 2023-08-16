import interact from "interactjs";
import Interact  from "@interactjs/types/index";

import {computed, ref} from "vue";
import { ResizableOptions } from '@interactjs/actions/resize/plugin';

export interface IResizeData {
    width: number;
    height: number;
    x: number;
    y: number;
}

const useResizable = (el: HTMLElement, interactOptions: ResizableOptions) => {
  if (!el) {
    throw new Error('useResizable requires an element to interact with');
  }
  const elRef = ref<HTMLElement>(el);
  const isResizing = ref<boolean>(false);
  const resizeData = ref<IResizeData>({
    x: 0,
    y: 0,
    width: elRef.value.getBoundingClientRect().width|| 0,
    height: elRef.value.getBoundingClientRect().height || 0
  });
  const resizableOptions = computed<ResizableOptions>({
    get: () => ({
      edges: { left: true, right: true, bottom: true, top: true },
      listeners: {
        start: onResizeStart,
        move: onResizeMove,
        end: onResizeEnd,
      },
      ...interactOptions,
    }),
    set: (value) => {
      interactOptions = value;
      resizable.set(value);
    }
  });

  const _setResizeData = (event: Interact.ResizeEvent) => {
    const { x, y } = elRef.value.dataset;
    resizeData.value = {
      width: event.rect.width,
      height: event.rect.height,
      x: (parseFloat(`${x}`) || 0) + (event.deltaRect?.left || 0),
      y: (parseFloat(`${y}`) || 0) + (event.deltaRect?.top || 0),
    };
  };

  const onResizeStart = (event: Interact.ResizeEvent) => {
    isResizing.value = true;
    _setResizeData(event);
  };

  const onResizeMove = (event: Interact.ResizeEvent) => {
    Object.assign(event.target.style, {
      ...event.target.style,
      width: `${event.rect.width}px`,
      height: `${event.rect.height}px`,
      transform: `translate(${resizeData.value.x}px, ${resizeData.value.y}px)`,
    });

    Object.assign(event.target.dataset, { x: resizeData.value.x, y: resizeData.value.y });
    _setResizeData(event);
  };

  const onResizeEnd = (event: Interact.ResizeEvent) => {
    isResizing.value = false;
    _setResizeData(event);
  };

  const resizable = interact(elRef.value).resizable(resizableOptions.value);

  return {
    elRef,
    resizeData,
    resizableOptions,
    isResizing,
  };
}

export default useResizable;
