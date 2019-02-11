<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom">
    <a class="navbar-brand mr-auto" href="/">
      <img src="../assets/logo.png" width="32" height="32" class="d-inline-block align-top" alt="">
      Nimismatics
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto align-content-center p-2">
        <li class="nav-item active">
          <a class="nav-link" href="/about-us">О нас</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/offer">Оферта <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active  d-flex align-items-center">
          <!--<a class="btn-link d-block px-md-1 header__link" href="/sing-in">Вход</a>-->
          <a class="nav-link text-dark header__link" href="/profile"><i class="fas fa-user-circle h5 mb-0"></i> Валерий</a>
        </li>
        <li class="nav-item">
          <!--<a class="btn-link d-block py-2 px-md-1" href="/offer">Регистрация <span class="sr-only">(current)</span></a>-->
          <a class="btn-link d-block py-2 px-md-1" href="/logout">Выйти <span class="sr-only">(current)</span></a>
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
