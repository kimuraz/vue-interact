import type { Interactable } from "@interactjs/types";
import interact from "interactjs";
import { Ref, watch, ref } from "vue";

export interface IPosition {
  x: number;
  y: number;
}

export interface ISizeData {
  width: number;
  height: number;
}


export interface InteractContext {
  interactable: Ref<Interactable | null>;
  interact: typeof interact;

  position: Ref<IPosition>;
  size: Ref<ISizeData>;
}

const useInteractContext = (elRef: Ref) => {
  let interactable = ref<Interactable | null>(null);
  const position = ref<IPosition>({ x: 0, y: 0 });
  const size = ref<ISizeData>({ width: 0, height: 0 });


  watch(elRef, () => {
    if (!elRef.value) {
      return;
    }
    interactable.value = interact(elRef.value);
    position.value = {
      x: 0,
      y: 0,
    };
  }, { immediate: true, deep: true });

  watch(() => position.value, (newPosition) => {
    const { x, y } = newPosition;
    if (interactable.value && interactable.value.target) {
      (interactable.value.target as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
    }
  }, { deep: true });

  watch(() => size.value, (newSizeData) => {
    const { width, height } = newSizeData;
    if (interactable.value && interactable.value.target) {
      (interactable.value.target as HTMLElement).style.width = `${width}px`;
      (interactable.value.target as HTMLElement).style.height = `${height}px`;
    }
  }, { deep: true });

  return {
    interactable,
    interact,
    position,
    size,
  } as InteractContext;
};

export default useInteractContext;
