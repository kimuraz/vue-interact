<template>
  <div class="vue-interact">
    <h2>Vue Interact Demo</h2>

    <InteractPanel :class="['resizable', 'draggable']">
      InteractPanel (I have all the mixins!)
    </InteractPanel>


    <DraggablePanel :lockAxis="lockDrag" class="draggable">
      <p>Dragging Panel</p>
      <p>Lock Axis control</p>
      <div class="lock-drag">
        <div v-for="val in ['x', 'y', 'xy']" :key="val">
          <input v-model="lockDrag" type="radio" name="lockDrag" :value="val" />
          {{ val }}
        </div>
      </div>
    </DraggablePanel>

    <ResizablePanel :edges="resizeEdges">
      Resizable Panel
      <div v-for="pos in Object.keys(resizeEdges)" :key="pos">
        <input type="checkbox" v-model="resizeEdges[pos]" />
        {{ pos }}
      </div>
    </ResizablePanel>
  </div>
</template>

<script>
import InteractPanel from '../src/components/InteractPanel';
import ResizablePanel from '../src/components/ResizablePanel';
import DraggablePanel from '../src/components/DraggablePanel';

export default {
  name: 'app',
  components: {
    InteractPanel,
    ResizablePanel,
    DraggablePanel,
  },
  data() {
    return {
      lockDrag: 'xy',
      resizeEdges: {
        top: true,
        bottom: true,
        left: true,
        right: true,
      },
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

.draggable,
.resizable {
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
