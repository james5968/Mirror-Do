<template>
  <div v-if="Object.keys(tasksTodo).length">
    <list-header class="bg-orange-6">Tasks to do.</list-header>
    <q-list separator bordered>
      <task v-for="(task, key) in tasksTodo" :key="key" :task="task" :id="key"></task>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ["tasksTodo"],
  components: {
    task: require("components/tasks/task.vue").default,
    "list-header": require("components/shared/list-header.vue").default
  }
};
</script>