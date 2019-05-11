<template>
  <div class="vue-interact">
    <h2>Vue Interact Demo</h2>

    <InteractPanel :lockAxis="lockDrag" class="draggable">
      <p>Dragging Panel</p>
      <p>Lock Axis control</p>
      <div class="lock-drag">
        <div
          v-for="val in ['x', 'y', 'xy']"
          :key="val"
        >
          <input
            v-model="lockDrag"
            type="radio"
            name="lockDrag"
            :value="val"
          />
          {{ val }}
        </div>
      </div>
    </InteractPanel>
  </div>
</template>

<script>
import InteractPanel from '../src/components/InteractPanel';

export default {
  name: 'app',
  components: {
    InteractPanel,
  },
  data() {
    return {
      lockDrag: 'xy',
    };
  },
};
</script>

<style>
.vue-interact {
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
}

.draggable {
  background-color: #2299ee;
  border-radius: 2px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.lock-drag {
  display: flex;
}
</style>
