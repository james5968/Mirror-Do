<template>
  <div>
    <p
      v-if="
        !Object.keys(tasksTodo).length &&
          !Object.keys(tasksCompleted).length &&
          search
      "
    >No search results.</p>

    <no-tasks
      v-if="
        !Object.keys(tasksTodo).length && !search && !settings.showTasksOneList
      "
      class="q-mb-md"
    ></no-tasks>

    <div class="full-width row">
      <q-card
        v-for="(taskList, key) in taskLists"
        :key="key"
        :id="key"
        flat
        bg-green
        class="card col q-ma-md bg-purple-1"
      >
        <tasks-banner>{{taskList}}</tasks-banner>
        <q-card-section>
          <tasks-Todo class="q-mt-md" :taskId="taskList" :tasksTodo="tasksTodo" />
          <tasks-Completed :taskId="taskList" :tasksCompleted="tasksCompleted" />
        </q-card-section>

        <q-card-section></q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted", "taskLists"]),
    ...mapGetters("settings", ["settings"]),
    ...mapState("tasks", ["search", "taskDownloaded"])
  },
  components: {
    
    "tasks-Todo": require("components/tasks/tasksTodo.vue").default,
    "tasks-Completed": require("components/tasks/tasksCompleted.vue").default,
    noTasks: require("components/tasks/noTasks.vue").default,
    "tasks-banner": require("components/tasks/taskBanner.vue").default,
  }
};
</script>

<style></style>
