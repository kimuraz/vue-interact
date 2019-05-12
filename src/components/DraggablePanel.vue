<template>
  <div class="draggable">
    <slot></slot>
  </div>
</template>

<script>
import { DraggingMixin } from '../vue-interact';

export default {
  name: 'draggablePanel',
  mixins: [DraggingMixin],
};
</script>
