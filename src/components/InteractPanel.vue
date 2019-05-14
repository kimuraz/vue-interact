<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { DraggingMixin, ResizingMixin } from '../vue-interact';

export default {
  name: 'interactPanel',
  mixins: [DraggingMixin, ResizingMixin],
};
</script>
