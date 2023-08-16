import interact from "interactjs";
import Interact from "@interactjs/types/index";

import {computed, ref} from "vue";
import { DraggableOptions } from '@interactjs/actions/drag/plugin';

export interface IPosition {
    x: number;
    y: number;
}
const useDraggable = (el: HTMLElement, interactOptions: DraggableOptions) => {
  if (!el) {
    throw new Error('useDraggable requires an element to interact with');
  }
  const elRef = ref<HTMLElement>(el);
  const isDragging = ref<boolean>(false);
  const position = ref<IPosition>({ x: 0, y: 0 });
  const draggableOptions = computed<DraggableOptions>({
    get: () => ({
      listeners: {
        start: onDragStart,
        move: onDragMove,
        end: onDragEnd,
      },
      ...interactOptions,
    }),
    set: (value) => {
      interactOptions = value;
      draggable.set(value);
    }
  });

  const onDragStart = (event: Interact.DragEvent) => {
    isDragging.value = true;
    position.value = {
      x: event.pageX,
      y: event.pageY,
    };
  }

    const onDragMove = (event: Interact.DragEvent) => {
      position.value = {
        x: event.dx,
        y: event.dy,
      };
      elRef.value.style.transform = `translate(${position.value.x}px, ${position.value.y}px)`;
    };

    const onDragEnd = (event: Interact.DragEvent) => {
      isDragging.value = false;
      position.value = {
          x: event.dx,
          y: event.dy,
      }
    };

  const draggable = interact(elRef.value).draggable(draggableOptions.value);

  return {
    elRef,
    position,
    draggableOptions,
    isDragging,
  };
}

export default useDraggable;
