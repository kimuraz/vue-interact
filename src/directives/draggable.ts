import interact from 'interactjs';

import { InteractEvent } from '@interactjs/types';
import type { DragDirectiveBinding } from '@vue-interact/types';
import type { VNode } from 'vue';

/**
* Vue directive to make an element draggable.
* @param {HTMLElement} el
* @param {binding: DragDirectiveBinding} A class name to add to the element default is 'vue-interact-draggable'
* @param {VNode} vnode
**/
const bind = (el: HTMLElement, binding: DragDirectiveBinding, vnode: VNode) => {
  const { arg, value } = binding;
  const className = arg || 'vue-interact-draggable';

  el.classList.add(className);

  const pos = { x: 0, y: 0 };

  const options = {
    listeners: {
      start(event: InteractEvent) {
        el.dispatchEvent(new CustomEvent('dragstart', { detail: event }));
      },
      move(event: InteractEvent) {
        pos.x += event.dx;
        pos.y += event.dy;

        el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      },

    },
    ...value,
  };

  interact(el).draggable(options);
};

export default { bind };
