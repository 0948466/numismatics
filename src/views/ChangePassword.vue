<template>
  <section class="change-password">
    <Breadcrumb :items="[{link: '/profile', text: 'Личный кабинет'}, {link: '/profile-edit', text: 'Изменение профиля'}, { text: 'Изменить пароль'}]"/>

      <div class="change-password__inner">
        <div class="container-fluid">
          <div class="row justify-content-between align-items-center m-0 mb-4">
            <h2>Изменение пароля</h2>
          </div>
        </div>

        <form action="#" class="mb-4">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="password-old">Текущий пароль</label>
                  <input type="password" class="form-control" id="password-old" name="password-old">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="password-new1">Новый пароль</label>
                  <input type="password" class="form-control" id="password-new1" name="password-new1">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="password-new2">Новый пароль ещё раз</label>
                  <input type="password" class="form-control" id="password-new2" name="password-new2">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <a href="/profile" class="btn btn-outline-dark w-100">Вернуться в личный кабинет</a>
              </div>
              <div class="col-md-6 mb-3">
                <button type="submit" class="btn btn-primary w-100">Сохранить изменения</button>
              </div>
            </div>
          </div>


        </form>
      </div>
  </section>
</template>

<script>
  import Breadcrumb from "../components/Breadcrumb";
  export default {
    name: "ChangePassword",
    components: {Breadcrumb}
  }
</script>

<style scoped>

</style>
