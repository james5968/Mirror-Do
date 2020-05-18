<template>
  <transition
    appear
    enter-active-class="animated zoomInUp"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div v-if="Object.keys(tasksTodo).length">
      <q-list separator bordered>
        <task
          v-for="(task, key) in tasksTodo"
          :key="key"
          :task="task"
          :id="key"
          v-if="task.list == taskId"
        ></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["tasksTodo", "taskId"],
  components: {
    task: require("components/tasks/task.vue").default,
    taskList: require("components/display/taskList.vue").default,
    "list-header": require("components/shared/list-header.vue").default
  },
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>
