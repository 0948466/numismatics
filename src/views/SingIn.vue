<template>
    <form class="signin__form col-lg-6 m-auto p-3 p-lg-5">
      <p class="mb-4">Чтобы получить доступ к возможностям биржи Пожалуйста, авторизируйтесь</p>

      <div class="border">
        <div class="container-fluid border-bottom p-3">
          <div class="row m-0 align-items-center">
            <h5 class="mr-3 mb-0">Вход</h5>
            <router-link :to="{ name: 'sing-up' }" class="ml-auto small">Нет аккаунта? Зарегистрируйтесь</router-link>

          </div>
        </div>
        <div class="p-3 pt-5">
          <label for="inputEmail">Email</label>
          <input type="email" id="inputEmail" class="form-control mb-3" name="email" required="" autofocus="">
          <label for="inputPassword">Пароль</label>
          <input type="password" id="inputPassword" class="form-control" name="password" required="">
          <div class="text-right">
            <router-link :to="{ name: 'password-recovery' }" class="btn-link small">Забыли пароль?</router-link>

          </div>
          <button class="btn btn-primary mt-4" type="submit">Войти</button>
        </div>
      </div>

    </form>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
