<template>
  <div class=" q-mb-md ">
    <q-select
      outlined
      @input="$emit('update:list', $event)"
      :value="list"
      :options="taskListsOptions"
      label="List"
      :rules="[val => !!val || 'Field is required']"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return { options: ["Todo", "Shopping", "Shared"] };
  },
  props: ["list"],

  computed: {
    ...mapGetters("tasks", ["taskListsOptions"]),
    ...mapState("tasks", ["lists"])
  }
};
</script>

<style scoped>
.q-select {
  flex: 0 0 112px;
}
</style>
