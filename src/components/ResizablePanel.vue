<template>
  <div class="resizable">
    <slot></slot>
  </div>
</template>

<script>
import { ResizingMixin } from '../vue-interact';

export default {
  name: 'resizablePanel',
  mixins: [ResizingMixin],
};
</script>
