<template>
  <form class="password-recovery__form col-lg-6 m-auto p-3 p-lg-5">
    <p class="mb-4">Чтобы восстановить пароль от аккаунта <br>Пожалуйста, укажите email</p>

    <div class="border">
      <div class="container-fluid border-bottom p-3">
        <div class="row m-0 align-items-center">
          <h5 class="mr-3 mb-0">Восстановление пароля</h5>
        </div>
      </div>
      <div class="p-3 pt-5">
        <label for="inputEmail">Email</label>
        <input type="email" id="inputEmail" class="form-control mb-3" name="email" required="" autofocus="">
        <button class="btn btn-primary" type="submit">Восстановить пароль</button>
        <p class=" mt-4">На указанный email отправлено письмо с восстановлением пароля</p>
      </div>
    </div>

  </form>
</template>

<script>
    export default {
        name: "PasswordRecovery"
    }
</script>

<style scoped>

</style>
