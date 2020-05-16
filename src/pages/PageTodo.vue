<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <template v-if="taskDownloaded">
        <div class="row q-mb-lg">
          <search />
          <sort />
        </div>

        <p
          v-if="
            !Object.keys(tasksTodo).length &&
              !Object.keys(tasksCompleted).length &&
              search
          "
        >
          No search results.
        </p>
        <q-scroll-area class="q-scroll-area-tasks">
          <no-tasks
            v-if="
              !Object.keys(tasksTodo).length &&
                !search &&
                !settings.showTasksOneList
            "
            class="q-mb-md"
          ></no-tasks>
          <tasks-Todo :tasksTodo="tasksTodo" />

          <tasks-Completed :tasksCompleted="tasksCompleted" class="q-mb-xl" />
        </q-scroll-area>

        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn
            @click="showAddTask = true"
            round
            color="primary"
            style="opacity:70%;"
            size="24px"
            icon="add"
            class="all-pointer-events"
          />
        </div>
      </template>

      <template v-else
        ><span class="absolute-center"
          ><q-spinner-hourglass color="primary" size="8em"
        /></span>
      </template>
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapGetters("settings", ["settings"]),
    ...mapState("tasks", ["search", "taskDownloaded"])
  },
  components: {
    "add-task": require("components/tasks/modals/AddTask.vue").default,
    "tasks-Todo": require("components/tasks/tasksTodo.vue").default,
    "tasks-Completed": require("components/tasks/tasksCompleted.vue").default,
    noTasks: require("components/tasks/noTasks.vue").default,
    search: require("components/tasks/tools/search.vue").default,
    sort: require("components/tasks/tools/sort.vue").default
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>
