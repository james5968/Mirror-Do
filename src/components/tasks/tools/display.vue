<template>
  <q-btn-dropdown outline color="grey-6" :label="'Display: ' + display">
    <q-list>
      <q-item clickable v-close-popup @click="setDisplay('list')">
        <q-item-section>
          <q-item-label>
            <q-icon v-if="display == 'list'" class="q-mr-sm" name="check" />List
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup @click="setDisplay('cards')">
        <q-item-section>
          <q-item-label>
            <q-icon v-if="display == 'cards'" class="q-mr-sm" name="check" />Cards
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      displayOption: "list"
    };
  },
  computed: {
    ...mapState("settings", ["display"])
  },
  methods: {
    ...mapActions("settings", ["setDisplay"])
  }
};
</script>

<style scoped>
.q-select {
  flex: 0 0 112px;
}
</style>