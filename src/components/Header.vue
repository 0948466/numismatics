<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom">
    <a class="navbar-brand mr-auto" href="/">
      <img src="../assets/icons/icon-coin.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Nimismatics
    </a>
    <!--<div class="navbar-toggler">-->
      <!--<a class="d-inline-block p-2" href="#">profile</a>-->
      <!--<a class="d-inline-block p-2" href="#">exit</a>-->
    <!--</div>-->
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
        <li class="nav-item active">
          <!--<a class="border-right pl-1 pr-1" href="/sing-in">Вход<i class="fas fa-user-circle"></i></a>-->
          <a class="nav-link text-dark" href="/profile"><i class="fas fa-user-circle h5 mb-0"></i> Валерий</a>
        </li>
        <li class="nav-item">
          <!--<a class="btn-link pl-1 pr-1 d-block" href="/offer">Регистрация <span class="sr-only">(current)</span></a>-->
          <a class="nav-link" href="/logout">Выйти <span class="sr-only">(current)</span></a>
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
