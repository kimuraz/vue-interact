# Draggable directive

This directive implements the [draggable action](https://interactjs.io/docs/draggable) as a [vue directive](https://vuejs.org/v2/guide/custom-directive.html).

## Usage

```
  <div v-draggable:customClass="optionsFromInteractJS" @start="startEvent" @move="moveEvent" />
```

`customClass`, `optionsFromInteractJS`, `@start` and `@move` are optional.

By default, the class used for this directive is `vue-interact-draggable`, check the setup section.
