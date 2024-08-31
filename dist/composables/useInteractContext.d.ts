import { Interactable } from '@interactjs/types';
import { default as interact } from 'interactjs';
import { Ref } from 'vue';
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
declare const useInteractContext: (elRef: Ref) => InteractContext;
export default useInteractContext;
