<template>
  <q-input
    clearable
    @keyup.esc="searchField = ''"
    outlined
    v-select-all
    v-model="searchField"
    label="Search"
    class="col"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("tasks", ["search"]),
    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        this.setSearch(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setSearch"])
  },
  directives: {
    selectAll
  }
};
</script>