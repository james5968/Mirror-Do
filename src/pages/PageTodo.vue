<template>
  <q-page>
    <div class="absolute q-pa-sm full-width full-height row">
      <div class="row full-width">
        <search />
        <sort />
        <display class="q-ml-sm" />
      </div>
      <template>
        <div class="q-pa-sm full-width full-height column">
          <task-list v-if="taskDownloaded && display == 'list'" />
          <task-card v-else-if="taskDownloaded && display == 'cards'" />
          <task-calender v-else-if="taskDownloaded && display == 'calender'" />
          <template v-else>
            <span class="absolute-center">
              <q-spinner-hourglass color="primary" size="8em" />
            </span>
          </template>
        </div>
      </template>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapGetters("settings", ["settings", "display"]),
    ...mapState("tasks", ["search", "taskDownloaded"])
  },
  components: {
    "task-list": require("components/display/taskList.vue").default,
    "task-card": require("components/display/taskCards.vue").default,
    "task-calender": require("components/display/taskCalender.vue").default,
    search: require("components/tasks/tools/search.vue").default,
    sort: require("components/tasks/tools/sort.vue").default,
    display: require("components/tasks/tools/display.vue").default
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>

<style lang="stylus">
.q-page {
  overflow-y: hidden !important;
}
</style>
