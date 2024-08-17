declare module '@vue-interact/types' {
  import type { DirectiveBinding } from 'vue';
  export interface DragDirectiveBinding extends DirectiveBinding {
    value: {
      listeners?: {
        start?(event: InteractEvent): void;
        move?(event: InteractEvent): void;
        end?(event: InteractEvent): void;
      };
    }
  }
}
