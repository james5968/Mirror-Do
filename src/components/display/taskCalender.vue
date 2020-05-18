<template>
  <div class="full-width full-height column">
    <div class="col">
      <q-calendar
        v-model="selectedDate"
        view="week-agenda"
        dense
        locale="en-gb"
        color="orange"
        style="max-height: 90%; overflow-y:hidden;"
      >
        <template #day-body="day">
          <template v-for="agenda in getAgenda(day)">
            <div
              :key="day.date + agenda.time"
              :label="agenda.time"
              class="justify-start q-ma-sm shadow-5 bg-grey-6"
            >
              <div
                v-if="agenda.avatar"
                class="row justify-center"
                style="margin-top: 30px; width: 100%;"
              >
                <q-avatar
                  style="margin-top: -25px; margin-bottom: 10px; font-size: 60px; max-height: 50px;"
                >
                  <img
                    :src="agenda.avatar"
                    style="border: #9e9e9e solid 5px;"
                  />
                </q-avatar>
              </div>
              <div class="col-12 q-px-sm">
                <strong>{{ agenda.time }}</strong>
              </div>
              <div
                v-if="agenda.desc"
                class="col-12 q-px-sm"
                style="font-size: 10px;"
              >
                {{ agenda.desc }}
              </div>
            </div>
          </template>
        </template>
      </q-calendar>
    </div>
    <!-- <p
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
    </q-scroll-area> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      selectedDate: "",
      agenda: {
        1: [
          {
            time: "08:00",
            avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
            desc: "Meeting with CEO"
          },
          {
            time: "08:30",
            avatar: "https://cdn.quasar.dev/img/avatar.png",
            desc: "Meeting with HR"
          },
          {
            time: "10:00",
            avatar: "https://cdn.quasar.dev/img/avatar1.jpg",
            desc: "Meeting with Karen"
          }
        ],
        2: [
          {
            time: "11:30",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
            desc: "Meeting with Alisha"
          },
          {
            time: "17:00",
            avatar: "https://cdn.quasar.dev/img/avatar3.jpg",
            desc: "Meeting with Sarah"
          }
        ],
        3: [
          {
            time: "08:00",
            desc: "Stand-up SCRUM",
            avatar: "https://cdn.quasar.dev/img/material.png"
          },
          {
            time: "09:00",
            avatar: "https://cdn.quasar.dev/img/boy-avatar.png"
          },
          {
            time: "10:00",
            desc: "Sprint planning",
            avatar: "https://cdn.quasar.dev/img/material.png"
          },
          {
            time: "13:00",
            avatar: "https://cdn.quasar.dev/img/avatar1.jpg"
          }
        ],
        4: [
          {
            time: "09:00",
            avatar: "https://cdn.quasar.dev/img/avatar3.jpg"
          },
          {
            time: "10:00",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg"
          },
          {
            time: "13:00",
            avatar: "https://cdn.quasar.dev/img/material.png"
          }
        ],
        5: [
          {
            time: "08:00",
            avatar: "https://cdn.quasar.dev/img/boy-avatar.png"
          },
          {
            time: "09:00",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg"
          },
          {
            time: "09:30",
            avatar: "https://cdn.quasar.dev/img/avatar4.jpg"
          },
          {
            time: "10:00",
            avatar: "https://cdn.quasar.dev/img/avatar5.jpg"
          },
          {
            time: "11:30",
            avatar: "https://cdn.quasar.dev/img/material.png"
          }
        ]
      }
    };
  },

  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapGetters("settings", ["settings"]),
    ...mapState("tasks", ["search", "taskDownloaded"])
  },
  components: {
    "tasks-Todo": require("components/tasks/tasksTodo.vue").default,
    "tasks-Completed": require("components/tasks/tasksCompleted.vue").default,
    noTasks: require("components/tasks/noTasks.vue").default
  },
  methods: {
    getAgenda(day) {
      return this.agenda[parseInt(day.weekday, 10)];
    }
  }
};
</script>

<style></style>
