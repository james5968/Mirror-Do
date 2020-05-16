<template>
  <transition appear enter-active-class="animated zoomInUp" leave-active-class="animated zoomOut">
    <div
      :class="{'q-mt-md' : !settings.showTasksOneList}"
      v-if="Object.keys(tasksCompleted).length"
    >
      <list-header v-if="!settings.showTasksOneList" class="bg-green-6">Completed</list-header>
      <q-list separator bordered>
        <task v-for="(task, key) in tasksCompleted" :key="key" :task="task" :id="key"></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["tasksCompleted"],
  components: {
    task: require("components/tasks/task.vue").default,
    "list-header": require("components/shared/list-header.vue").default
  },
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>