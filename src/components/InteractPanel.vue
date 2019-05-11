<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { DraggingMixin } from '../vue-interact';

export default {
  name: 'interactPanel',
  mixins: [DraggingMixin],
};
</script>
