<template>
  <transition
    appear
    enter-active-class="animated zoomInUp"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div v-if="Object.keys(tasksTodo).length">
      <list-header v-if="!settings.showTasksOneList" class="bg-orange-6">Tasks to do</list-header>
      <q-list separator bordered>
        <task v-for="(task, key) in tasksTodo" :key="key" :task="task" :id="key"></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["tasksTodo"],
  components: {
    task: require("components/tasks/task.vue").default,
    "list-header": require("components/shared/list-header.vue").default
  },
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>