<template>
  <q-page padding>
    <input 
      v-model="message" 
      @keyup="handleKeyup" 
    />
    <button @click="clearMessage">Clear</button>
    <h5>{{message}}</h5>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "hello quasar"
    };
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
    handleKeyup(e) {
      if (e.keyCode == 27) {
        this.clearMessage();
      } else if (e.keyCode == 13) {
        this.alertMessage();
      }
    },
    alertMessage() {
      alert(this.message);
    }
  }
};
</script>
