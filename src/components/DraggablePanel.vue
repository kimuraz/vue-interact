<template>
  <div class="draggable">
    <slot />
  </div>
</template>

<script>
import { DraggingMixin } from '../index';

export default {
  name: 'DraggablePanel',
  mixins: [DraggingMixin],
};
</script>
