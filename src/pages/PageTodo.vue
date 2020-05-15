<template>
  <q-page class="q-pa-md">
    <no-tasks
      v-if="!Object.keys(tasksTodo).length"
      class="q-mb-md"
      @showAddTask="showAddTask = true"
    ></no-tasks>
    <tasks-Todo :tasksTodo="tasksTodo" />

    <tasks-Completed :tasksCompleted="tasksCompleted" />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn @click="showAddTask = true" round color="primary" size="24px" icon="add" />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"])
  },
  components: {
    "add-task": require("components/tasks/modals/AddTask.vue").default,
    "tasks-Todo": require("components/tasks/tasksTodo.vue").default,
    "tasks-Completed": require("components/tasks/tasksCompleted.vue").default,
    noTasks: require("components/tasks/noTasks.vue").default
  }
};
</script>
