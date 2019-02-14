<template>
  <section class="profile-edit">
    <Breadcrumb :items="[{link: 'profile', text: 'Личный кабинет'}, { text: 'Изменение профиля'}]"/>

    <div class="profile-edit__inner mb-5">
      <div class="container-fluid">
        <div class="row justify-content-between align-items-center m-0">
          <h2 class="mb-3">Изменение профиля</h2>
          <router-link :to="{ name: 'change-password' }" class="btn btn-link">Изменить пароль</router-link>
        </div>
      </div>

      <form>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Введите Email">
              </div>

              <div class="form-group">
                <label for="city">Город</label>
                <input type="text" class="form-control" id="city" name="city" placeholder="Введите город">
              </div>

              <div class="form-group">
                <label for="address">Адрес</label>
                <input type="text" class="form-control" id="address" name="address" placeholder="Введите адрес">
              </div>

              <p class="mb-2">Скан паспорта</p>
              <div class="border p-4 text-center mb-4">
                <p>
                  Наведите файлы сюда или нажмите
                </p>
                <label class="btn btn-outline-dark mb-0 ml-auto">
                  Выбрать <input type="file" name="file-passport" hidden>
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Имя</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Введите имя">
              </div>

              <div class="form-group">
                <label for="surname">Фамилия</label>
                <input type="text" class="form-control" id="surname" name="surname" placeholder="Введите фамилию">
              </div>

              <div class="form-group">
                <label for="patronymic">Отчество</label>
                <input type="text" class="form-control" id="patronymic" name="patronymic" placeholder="Введите отчество">
              </div>

              <p class="mb-2">Скан ИНН</p>
              <div class="border p-4 text-center mb-4">
                <p>
                  Наведите файлы сюда или нажмите
                </p>
                <label class="btn btn-outline-dark mb-0 ml-auto">
                  Выбрать <input type="file" name="file-inn" hidden>
                </label>
              </div>


            </div>

            <div class="col">
              <router-link :to="{ name: 'profile' }" class="btn btn-outline-dark mr-3 mb-3">Отменить изменения</router-link>

              <button type="submit" class="btn btn-primary mb-3">Сохранить изменения</button>
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
    name: "ProfileEdit",
    components: {Breadcrumb}
  }
</script>

<style scoped>

</style>
