import interact from "interactjs";
import Interact, { Options as InteractOptions } from "@interactjs/types/index";

import {computed, ref} from "vue";

export interface IPosition {
    x: number;
    y: number;
}

const useDraggable = (el: HTMLElement, interactOptions: InteractOptions) => {
  const elRef = ref<HTMLElement>(el);
  const isDragging = ref<boolean>(false);
  const position = ref<IPosition>({ x: 0, y: 0 });
  const draggableOptions = computed<InteractOptions>({
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

  const onDragStart = (event: Interact.InteractEvent) => {
    isDragging.value = true;
    position.value = {
      x: event.pageX,
      y: event.pageY,
    };
  }

    const onDragMove = (event: Interact.InteractEvent) => {
      position.value = {
        x: event.dx,
        y: event.dy,
      };
      elRef.value.style.transform = `translate(${position.value.x}px, ${position.value.y}px)`;
    };

    const onDragEnd = (event: Interact.InteractEvent) => {
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
