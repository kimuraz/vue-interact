<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { useInteractContext, useResizable } from '../../../../src';

const interactableTarget = ref(null);

const context = useInteractContext(interactableTarget);
const { init, position, resizeData } = useResizable(context);

onMounted(() => {
  nextTick(() => {
    init();
  });
});

const reset = () => {
  resizeData.value.width = 100;
  resizeData.value.height = 100;
  position.value.x = 0;
  position.value.y = 0;
}
</script>

<template>
  <div class="container">
    {{ position }}
    <div ref="interactableTarget" style="width: 100px; height: 100px; background-color: #29e;">
    </div>

    <button class="reset-btn" @click="reset">Reset</button>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 30vh;
  border: 2px solid #29e;
  position: relative;
}

.reset-btn {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
