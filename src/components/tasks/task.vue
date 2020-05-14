<template>
  <q-item
    :class="!task.completed ? 'bg-deep-purple-2' : 'bg-green-2' "
    @click="task.completed = !task.completed"
    clickable
    v-ripple
  >
    <q-item-section side>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{'text-strikethrough':task.completed}">{{task.name}}</q-item-label>
    </q-item-section>
    <q-item-section side top>
      <div class="row">
        <div class="column justify-center">
          <q-icon class="q-mr-xs" name="event" size="18px" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{task.dueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ["task", "id"]
};
</script>