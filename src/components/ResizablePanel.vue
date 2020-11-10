<template>
  <div class="resizable">
    <slot />
  </div>
</template>

<script>
import { ResizingMixin } from '../index';

export default {
  name: 'ResizablePanel',
  mixins: [ResizingMixin],
};
</script>
