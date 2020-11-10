<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { DraggingMixin, ResizingMixin } from '../index';

export default {
  name: 'InteractPanel',
  mixins: [DraggingMixin, ResizingMixin],
};
</script>
