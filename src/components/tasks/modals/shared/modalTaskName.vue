<template>
  <div class="row q-mb-sm">
    <q-input
      autofocus
      clearable
      outlined
      @input=" $emit('update:name', $event)"
      :value="name"
      ref="name"
      label="Task Name"
      class="col"
      :rules="[val => !!val || 'Field is required']"
    />
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>