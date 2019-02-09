<template>
  <section class="profile p-2 p-lg-5 border-bottom">
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
          <div class="col-md-6">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Введите Email">
            </div>

            <div class="form-group">
              <label for="city">Город</label>
              <input type="text" class="form-control" id="city" placeholder="Введите город">
            </div>

            <div class="form-group">
              <label for="address">Адрес</label>
              <input type="text" class="form-control" id="address" placeholder="Введите адрес">
            </div>

            <p class="mb-2">Скан паспорта</p>
            <div class="container-fluid border p-5">
              <div class="row align-items-center">
                <i class="fas fa-check-square mr-3" style="font-size: 40px"></i>
                <p class="mr-2 mb-0">
                  Скан паспорта успешно загружен
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="name">Имя</label>
              <input type="text" class="form-control" id="name" placeholder="Введите имя">
            </div>

            <div class="form-group">
              <label for="surname">Фамилия</label>
              <input type="text" class="form-control" id="surname" placeholder="Введите фамилию">
            </div>

            <div class="form-group">
              <label for="patronymic">Отчество</label>
              <input type="text" class="form-control" id="patronymic" placeholder="Введите отчество">
            </div>

            <p class="mb-2">Скан ИНН</p>
            <div class="container-fluid border p-5">
              <div class="row align-items-center">
                <i class="fas fa-exclamation-triangle mr-3" style="font-size: 40px"></i>
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