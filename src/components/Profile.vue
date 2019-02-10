<template>
  <section class="profile pt-3 pt-md-5 pb-3 border-bottom">
    <div class="container-fluid mb-4">
      <div class="row align-items-center">
        <h1 class="mr-4">Мой профиль</h1>
        <a href="/profile-edit" class="btn-link mr-2">Изменить</a>
        <p class="mb-0 ml-auto">Статус - <span class="text-info">На проверке</span></p>
      </div>
    </div>

    <form>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 mb-3 p-0 pr-md-2">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control bg-white" id="email" value="test@test.test" disabled>
            </div>

            <div class="form-group">
              <label for="city">Город</label>
              <input type="text" class="form-control bg-white" id="city" value="Москва" disabled>
            </div>

            <div class="form-group">
              <label for="address">Адрес</label>
              <input type="text" class="form-control bg-white" id="address" value="ул. Ленина д.8" disabled>
            </div>

            <p class="mb-2">Скан паспорта</p>
            <div class="container-fluid border p-3 p-md-5 mb-2">
              <div class="row align-items-center m-0 justify-content-center">
                <i class="fas fa-check-square mr-3 mb-2 mb-md-0" style="font-size: 40px"></i>
                <p class="mr-2 mb-0">
                  Скан паспорта успешно загружен
                </p>
              </div>
            </div>`
          </div>
          <div class="col-md-6 mb-3 p-0 pl-md-2">
            <div class="form-group">
              <label for="name">Имя</label>
              <input type="text" class="form-control bg-white" id="name" value="Сергей" disabled>
            </div>

            <div class="form-group">
              <label for="surname">Фамилия</label>
              <input type="text" class="form-control bg-white" id="surname" value="Иванов" disabled>
            </div>

            <div class="form-group">
              <label for="patronymic">Отчество</label>
              <input type="text" class="form-control bg-white" id="patronymic" value="Петрович" disabled>
            </div>

            <p class="mb-2">Скан ИНН</p>
            <div class="container-fluid border p-3 p-md-5 mb-2">
              <div class="row align-items-center text-center m-0 justify-content-center">
                <i class="fas fa-exclamation-triangle mr-3 mb-2 mb-md-0" style="font-size: 40px"></i>
                <p class="mr-2 mb-0">
                  Скан ИНН не загружен
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </form>
  </section>

</template>

<script>
  export default {
    name: "Profile",
    mounted() {
      $('.clickable-row').click(function() {
        window.location = $(this).data('href');
      });
    }
  }
</script>

<style scoped>

</style>