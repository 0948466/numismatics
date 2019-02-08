<template>
    <form class="signin__form col-lg-6 m-auto p-3 p-lg-5">
      <p class="mb-4">Чтобы получить доступ к возможностям биржи Пожалуйста, авторизируйтесь</p>

      <div class="border">
        <div class="container-fluid border-bottom p-3">
          <div class="row m-0">
            <h5 class="mr-3 mb-0">Вход</h5>
            <!--<a href="#" class="ml-auto">Нет аккаунта? Зарегистрируйтесь</a>-->
          </div>
        </div>
        <div class="p-3 pt-5">
          <label for="inputEmail" class="sr-only">Email</label>
          <input type="email" id="inputEmail" class="form-control mb-3" placeholder="Email" required="" autofocus="">
          <label for="inputPassword" class="sr-only">Пароль</label>
          <input type="password" id="inputPassword" class="form-control mb-5" placeholder="Пароль" required="">
          <button class="btn btn-primary w-100" type="submit">Войти</button>
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
