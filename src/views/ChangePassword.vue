<template>
  <section class="change-password">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent pl-2 pl-lg-5">
          <li class="breadcrumb-item"><a href="/profile">Личный кабинет</a></li>
          <li class="breadcrumb-item"><a href="/profile-edit">Изменение профиля</a></li>
          <li class="breadcrumb-item active" aria-current="page">Изменить пароль</li>
        </ol>
      </nav>

      <div class="change-password__inner pl-2 pl-lg-5 mb-5">
        <div class="container-fluid">
          <div class="row justify-content-between align-items-center mb-4">
            <h2 class="mb-3">Изменение пароля</h2>
          </div>
        </div>

        <form action="#">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="password-old">Текущий пароль</label>
                  <input type="password" class="form-control" id="password-old">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="password-new1">Новый пароль</label>
                  <input type="password" class="form-control" id="password-new1">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="password-new2">Новый пароль ещё раз</label>
                  <input type="password" class="form-control" id="password-new2">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <a href="/profile" class="btn btn-outline-dark w-100">Вернуться в личный кабинет</a>
              </div>
              <div class="col-md-6">
                <button type="submit" class="btn btn-primary w-100">Сохранить изменения</button>
              </div>
            </div>
          </div>


        </form>
      </div>
  </section>
</template>

<script>
  export default {
    name: "ChangePassword"
  }
</script>

<style scoped>

</style>