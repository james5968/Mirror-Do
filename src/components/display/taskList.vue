<template>
  <div class="full-width full-height column">
    <p
      v-if="
        !Object.keys(tasksTodo).length &&
          !Object.keys(tasksCompleted).length &&
          search
      "
    >No search results.</p>
    <q-scroll-area class="q-scroll-area-tasks">
      <div class="q-mr-sm" v-for="(taskList, key) in taskLists" :key="key">
        <div>
          <tasks-banner>{{taskList}}</tasks-banner>
          <no-tasks
            v-if="
            !Object.keys(tasksTodo).length &&
              !search &&
              !settings.showTasksOneList
          "
            class="q-mb-md"
          ></no-tasks>
          <tasks-Todo :taskId="taskList" :tasksTodo="tasksTodo" />
          <tasks-Completed :taskId="taskList" :tasksCompleted="tasksCompleted" class="q-mb-sm" />
        </div>
      </div>
      <div style="height:5em"></div>
    </q-scroll-area>
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
    "tasks-banner": require("components/tasks/taskBanner.vue").default,
    noTasks: require("components/tasks/noTasks.vue").default
  }
};
</script>
