import interact from 'interactjs';

const bind = (el, binding, vnode) => {
  const { arg, value, modifiers } = binding;
  const className = arg || 'vue-interact-rz';
  const {
    top, bottom, left, right,
  } = modifiers;

  el.classList.add(className);

  const options = {
    edges: {
      top: !!top,
      bottom: !!bottom,
      left: !!left,
      right: !!right,
    },
    ...value,
  };

  interact(el)
    .resizable(options)
    .on('resizemove', event => {
      let { x, y } = el.dataset;

      x = parseFloat(x) || 0;
      y = parseFloat(y) || 0;

      el.style.width = `${event.rect.width}px`;
      el.style.height = `${event.rect.height}px`;

      el.dataset.x = x;
      el.dataset.y = y;
      vnode.context.$emit('resize', event);
    });
};

export default { bind };
