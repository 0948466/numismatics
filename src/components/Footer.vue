<template>
  <footer class="p-3 border-top">
    <p class="text-center">
      Биржа Numismatics. 2019 год. Все права защищены.<br>
      <router-link class="card-link text-dark p-2" :to="{name: 'about-us'}"><u>О проекте</u></router-link>
      <router-link class="card-link text-dark p-2" :to="{name: 'offer'}"><u>Оферта</u></router-link>
      <router-link class="card-link text-dark p-2" :to="{name: 'contacts'}"><u>Контакты</u></router-link>
    </p>

  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>
