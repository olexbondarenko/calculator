<template>
  <div class="login">
    <h5 class="login__title">Авторизируйтесь, чтобы продолжить</h5>
    <form action="/" method="POST" id="login-form" class="login__form">
      <div class="login__form-value">
        Сумма, грн:<strong>{{ amount }}</strong>
      </div>
      <div class="login__form-value">
        Срок, дн:<strong>{{ days }}</strong>
      </div>
      <div class="login__form-field">
        <div class="login__form-info"></div>
        <label for="user-email">Email / Тел. +38...*</label>
        <input
          id="user-email"
          type="text"
          v-model="emailPhone"
          placeholder=""
        />
      </div>
      <div class="login__form-field">
        <div class="login__form-info"></div>
        <label for="user-password">Пароль*</label>
        <input
          id="user-password"
          type="password"
          v-model="password"
          placeholder=""
        />
      </div>
      <a href="#" class="login__form-restore">Забыли пароль?</a>
      <button class="login__form-btn" @click.prevent="signIn()">Войти</button>
      <a href="#" class="login__form-login">Зарегистрироваться</a>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ["amount", "days"],
  data() {
    return {
      emailPhone: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      let data = {
        amount: this.amount,
        days: this.days,
        emailPhone: this.emailPhone,
        password: this.password,
      };
      this.$emit("signIn", data);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.login {
  width: 100%;
  padding: 32px 16px;
  &__title {
    margin-bottom: 28px;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
  &__form {
    max-width: 456px;
    margin: auto;
    &-value {
      margin-bottom: 28px;
      padding-bottom: 7px;
      border-bottom: 1px solid $gray-3;
      font-size: 16px;
      line-height: 20px;
      color: $gray-1;
      strong {
        display: inline-block;
        padding-left: 11px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
      }
    }
    &-info {
      position: absolute;
      top: 0;
      right: 0;
      width: 18px;
      height: 18px;
      background: url("~@/assets/img/form-info.svg") no-repeat;
      background-size: contain;
      cursor: help;
    }
    &-field {
      position: relative;
      margin-bottom: 25px;
      label {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
        line-height: 20px;
        color: $gray-1;
      }
      input {
        display: block;
        width: 100%;
        padding: 11px 12px;
        border: 1px solid $gray-2;
        font-size: 16px;
        color: $gray-1;
      }
    }
    &-restore {
      display: block;
      margin-bottom: 28px;
      font-size: 14px;
      line-height: 20px;
      text-decoration: none;
      color: $violet;
    }
    &-btn {
      display: block;
      font-weight: 500;
      padding: 8px 117.5px;
      margin: 0 auto 36px;
      background: $violet-gradient;
      box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.15);
      border: none;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
    }
    &-login {
      display: block;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-decoration: none;
      text-align: center;
      color: $violet;
    }
  }
}

@media screen and (min-width: 835px) {
  .login {
    max-width: 836px;
    margin: auto;
    &__title {
      font-size: 24px;
      line-height: 36px;
    }
  }
}
</style>
