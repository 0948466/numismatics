<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom">
    <router-link class="navbar-brand mr-auto"  :to="{name: 'home'}">
      <img src="../assets/logo.png" width="32" height="32" class="d-inline-block align-top" alt="">
      Nimismatics
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto align-content-center p-2">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{name: 'about-us'}">О нас</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'offer'}">Оферта <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item active  d-flex align-items-center">
          <!--<a class="btn-link d-block px-md-1 header__link" href="/sing-in">Вход</a>-->
          <router-link class="nav-link text-dark header__link" :to="{name: 'profile'}"><i class="fas fa-user-circle h5 mb-0"></i> Валерий</router-link>
        </li>
        <li class="nav-item">
          <!--<a class="btn-link d-block py-2 px-md-1" href="/offer">Регистрация <span class="sr-only">(current)</span></a>-->
          <router-link class="btn-link d-block py-2 px-md-1" :to="{name: 'sing-in'}">Выйти <span class="sr-only">(current)</span></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Header'
  };
</script>

<style scoped>

</style>
