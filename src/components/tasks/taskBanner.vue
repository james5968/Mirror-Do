<template>
  <div>
    <q-banner rounded inline-actions class="bg-primary text-white full-width">
      <h6 style="margin:0; padding:0;font-family:'Comforta'">
        <slot></slot>
      </h6>
      <template v-slot:action>
        <q-btn @click="showAddTask = true" flat color="white" size="1.5em" icon="add_circle" />
      </template>
    </q-banner>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showAddTask: false
    };
  },
 
  components: {
    "add-task": require("components/tasks/modals/AddTask.vue").default,
    
    
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>

