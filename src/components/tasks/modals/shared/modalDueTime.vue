<template>
  <q-input
    @input="$emit('update:dueTime', $event)"
    clearable
    outlined
    :value="dueTime"
    label="Due Time"
  >
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-time @input="$emit('update:dueTime', $event)" :value="dueTime" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ["dueTime"]
};
</script>