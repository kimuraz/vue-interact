import interact from "interactjs";
import Interact from "@interactjs/types/index";

import { computed, ref, watch, onMounted } from "vue";
import { DraggableOptions } from '@interactjs/actions/drag/plugin';
import type { InteractContext } from "./useInteractContext";

export interface IPosition {
  x: number;
  y: number;
}
const useDraggable = (context: InteractContext, interactOptions: DraggableOptions = {}) => {
  const isDragging = ref<boolean>(false);
  const position = context.position;

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
      (context.interactable.value as Interact.Interactable).set(value);
    }
  });

  const onDragStart = (event: Interact.DragEvent) => {
    isDragging.value = true;
  }

  const onDragMove = (event: Interact.DragEvent) => {
    position.value = {
      x: position.value.x + event.dx,
      y: position.value.y + event.dy,
    };
  };

  const onDragEnd = (event: Interact.DragEvent) => {
    isDragging.value = false;
  };

  const init = () => {
    if (!context.interactable.value) {
      throw new Error('Interactable context is not set');
    }
    context.interactable.value.draggable(draggableOptions.value);
  };


  return {
    init,
    position,
    draggableOptions,
    isDragging,
  };
}

export default useDraggable;
