<template>
  <q-item
    :class="!task.completed ? 'bg-deep-purple-1' : 'bg-green-2' "
    @click="updateTask({id:id, updates:{completed:!task.completed}})"
    clickable
    v-ripple
    v-touch-hold:1000.mouse="showEditTaskModal"
  >
    <q-item-section side>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{'text-strikethrough':task.completed}"
        v-html="$options.filters.searchHighlighted(task.name,search)"
      ></q-item-label>
    </q-item-section>
    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column">
          <q-item-label class="row justify-end" caption>{{taskDueTime}}</q-item-label>
          <q-item-label class="row justify-end" caption>{{task.dueDate | niceDate}}</q-item-label>
        </div>
        <div class="column justify-center">
          <q-icon class="q-mr-xs q-ml-xs" name="event" size="23px" />
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn @click.stop="showEditTaskModal" flat round dense color="primary" icon="edit" />
        <q-btn @click.stop="promptToDelete(id)" flat round dense color="negative" icon="delete" />
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>
  </q-item>
</template>

<script>
import { date } from "quasar";

import { mapActions, mapState, mapGetters } from "vuex";
export default {
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
    showEditTaskModal() {
      this.showEditTask = true;
    }
  },
  components: {
    "edit-task": require("components/tasks/modals/EditTask.vue").default
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "D MMM YY ");
    },
    searchHighlighted(value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, "ig");
        return value.replace(searchRegExp, match => {
          return '<span class="bg-orange-4">' + match + "</span>";
        });
      }
      return value;
    }
  },
  computed: {
    ...mapState("tasks", ["search"]),
    ...mapGetters("settings", ["settings"]),
    taskDueTime() {
      if (this.settings.show12HourTime) {
        return date.formatDate(
          this.task.dueDate + " " + this.task.dueTime,
          "h:mmA"
        );
      }
      return this.task.dueTime;
    }
  }
};
</script>