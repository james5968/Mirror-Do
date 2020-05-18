<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="absolute-center">Object-Tive</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="255"
      show-if-above
      elevated
      content-class="bg-primary"
    >
      <div class="absolute-top bg-primary ">
        <q-img
          src="../assets/bg-app-todo.png"
          style="height: 150px; object-fit:cover; opacity:0.3;"
        ></q-img>
        <div class="absolute-top q-ma-sm q-mb-md bg-transparent text-white">
          <q-icon name="account_circle" color="white" size="4em" />

          <span class="text-weight-bold q-ml-sm">User Name</span>
        </div>
        <div>
          <q-btn
            v-if="!loggedIn"
            @click="leftDrawerOpen = false"
            to="/auth"
            size="1em"
            color="pink-10"
            label="Login"
            rounded
            class="absolute-bottom  q-ma-sm "
            style="max-height:25%; width:93%"
          />
          <q-btn
            v-else
            @click="logoutUser"
            size="1em"
            color="pink-10"
            label="Logout"
            rounded
            class="absolute-bottom  q-ma-sm "
            style="max-height:25%; width:93%"
          />
        </div>
      </div>
      <q-scroll-area
        v-if="loggedIn"
        style="height: calc(100% - 150px); margin-top: 150px; "
      >
        <q-list dark>
          <q-item
            v-for="nav in navs"
            :key="nav.label"
            :to="nav.to"
            exact
            clickable
            class="text-grey-5"
          >
            <q-item-section avatar>
              <q-icon :name="nav.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ nav.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MainLayout",

  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: "Todo",
          icon: "list",
          to: "/"
        },
        {
          label: "Settings",
          icon: "settings",
          to: "/settings"
        }
      ]
    };
  },
  computed: {
    ...mapState("auth", ["loggedIn"])
  },
  methods: {
    ...mapActions("auth", ["logoutUser"])
  }
};
</script>
