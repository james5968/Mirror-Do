<template>
  <div class="q-mt-md" v-if="Object.keys(tasksCompleted).length">
    <list-header class="bg-green-6">Completed</list-header>
    <q-list separator bordered>
      <task v-for="(task, key) in tasksCompleted" :key="key" :task="task" :id="key"></task>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ["tasksCompleted"],
  components: {
    task: require("components/tasks/task.vue").default,
    "list-header": require("components/shared/list-header.vue").default
  }
};
</script>