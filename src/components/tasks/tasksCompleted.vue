<template>
  <transition appear enter-active-class="animated zoomInUp" leave-active-class="animated zoomOut">
    <div>
      <q-list separator bordered>
        <task
          v-for="(task, key) in tasksCompleted"
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
  props: ["tasksCompleted", "taskId"],
  components: {
    task: require("components/tasks/task.vue").default,
    "list-header": require("components/shared/list-header.vue").default
  },
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>
