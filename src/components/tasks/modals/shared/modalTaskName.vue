<template>
  <div class="row q-mb-sm">
    <q-input
      clearable
      outlined
      @input=" $emit('update:name', $event)"
      :value="name"
      autofocus
      v-select-all
      ref="name"
      label="Task Name"
      class="col"
      :rules="[val => !!val || 'Field is required']"
    />
  </div>
</template>

<script>
import {selectAll} from "src/directives/directive-select-all"
export default {
  props: ["name"],
  directives: {
    selectAll
  }
};
</script>