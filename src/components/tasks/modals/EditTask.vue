<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName" />
        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" />

        <modal-due-time
          class="row q-mb-sm"
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />
      </q-card-section>
      <modal-button />
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });
      this.$emit("close");
    }
  },
  components: {
    "modal-header": require("components/tasks/modals/shared/modal-header.vue")
      .default,
    "modal-task-name": require("components/tasks/modals/shared/modalTaskName.vue")
      .default,
    "modal-due-date": require("components/tasks/modals/shared/modalDueDate.vue")
      .default,
    "modal-due-time": require("components/tasks/modals/shared/modalDueTime.vue")
      .default,
    "modal-button": require("components/tasks/modals/shared/modal-Buttons.vue")
      .default
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
};
</script>