<template>
  <transition
    appear
    enter-active-class="animated zoomInUp"
    leave-active-class="animated zoomOut absolute-top"
  >
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check_circle" color="primary" />
      </template>
      You have no tasks to do today!
      <template v-slot:action>
        <q-btn @click="$root.$emit('showAddTask')" flat color="primary" label="Add Task" />
      </template>
    </q-banner>
  </transition>
</template>

<script>
export default {};
</script>