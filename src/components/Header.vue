<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom">
    <a class="navbar-brand mr-auto" href="/">
      <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
      Nimismatics
    </a>
    <div class="navbar-toggler">
      <a class="d-inline-block p-2" href="#">profile</a>
      <a class="d-inline-block p-2" href="#">exit</a>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>



    <div class="collapse navbar-collapse flex-grow-0">
      <ul class="navbar-nav mr-3">
        <li class="nav-item active">
          <a class="nav-link" href="/about-us">О нас</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/offer">Оферта <span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>

    <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="border-right pl-1 pr-1" href="/about-us">Вход</a>
        </li>
        <li class="nav-item">
          <a class="btn-link pl-1 pr-1" href="/offer">Регистрация <span class="sr-only">(current)</span></a>
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
