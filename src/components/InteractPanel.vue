<template>
  <div class="interact">
    <slot></slot>
  </div>
</template>

<script>
  import VueInteract from '../vue-interact';

  export default {
    name: 'interactPanel',
    mixins: [VueInteract],
  };
</script>
