<template>
  <div id="app">
    <Calculator
      v-if="!isLoginForm"
      v-on:showLoginForm="showLoginForm($event)"
    />
    <Login
      v-if="isLoginForm"
      v-on:signIn="signIn($event)"
      :amount="amount"
      :days="days"
    />
  </div>
</template>

<script>
import Calculator from "@/components/Calculator";
import Login from "@/components/Login";
export default {
  name: "App",
  data() {
    return {
      isLoginForm: false,
      amount: null,
      days: null,
    };
  },
  components: {
    Calculator,
    Login,
  },
  methods: {
    showLoginForm(data) {
      this.amount = data.amount;
      this.days = data.days;
      this.isLoginForm = true;
    },
    signIn(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap");

@import "@/assets/scss/_reset";
@import "@/assets/scss/_variables";

html {
  height: 100%;
}

body {
  position: relative;
  min-height: 100vh;
  margin: 0;
  background: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: $black;
}

#app {
  display: flex;
  align-items: center;
  min-height: 100vh;
}
</style>
