<template>
  <section class="order">
    <Breadcrumb :items="[{link: '/profile', text: 'Личный кабинет'}, {link: '/orders', text: 'Мои заказы'}, { text: 'Покупка монеты'}]"/>

    <div class="order__inner p-3 ">
      <h2 class="mb-3">Покупка монеты <i class="fas fa-check-circle"></i></h2>
      <h5>Информация о сделке</h5>
      <div class="border p-4">
        <p>Монета - "Распущенные волосы"</p>
        <p>Упаковка - Монетный двор</p>
        <p>Цена за штуку - 26450 ₽</p>
        <p>Количество - 13 штук</p>
        <p>Итого - 345 850 ₽</p>
      </div>
    </div>

    <section class="coin-desc p-3 mb-5">
      <div class="container-fluid">
        <div class="row justify-content-between align-items-center mb-4">
          <h1 class="mb-3">"Распущенные волосы"</h1>
          <a href="/" class="btn-link">Найти в катологе</a>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 mr-auto mb-3 mb-md-1 p-0">
            <a class="d-block w-100 mb-4 text-center" data-fancybox="gallery" :href="require('../assets/image/RR5714-0011.png')">
              <img src="../assets/image/RR5714-0011.png"></a>
            <div class="container-fluid">
              <div class="row flex-nowrap overflow-auto">
                <a class="w-25 mr-2 flex-shrink-0" data-fancybox="gallery" :href="require('../assets/image/RR5714-0011.png')">
                  <img src="../assets/image/RR5714-0011.png"></a>
                <a  class="w-25 mr-2 flex-shrink-0" data-fancybox="gallery" :href="require('../assets/image/RR5714-0011.png')">
                  <img src="../assets/image/RR5714-0011.png"></a>
                <a class="w-25 mr-2 flex-shrink-0" data-fancybox="gallery" :href="require('../assets/image/RR5714-0011.png')">
                  <img src="../assets/image/RR5714-0011.png"></a>
                <a class="w-25 mr-2 flex-shrink-0" data-fancybox="gallery" :href="require('../assets/image/RR5714-0011.png')">
                  <img src="../assets/image/RR5714-0011.png"></a>
                <a class="w-25 flex-shrink-0" data-fancybox="gallery" :href="require('../assets/image/RR5714-0011.png')">
                  <img src="../assets/image/RR5714-0011.png"></a>
              </div>
            </div>

          </div>
          <div class="col-md-6 p-0 d-flex flex-column justify-content-center">
            <h5>Описание</h5>
            <p class="small">Описание Описание Описание Описание</p>
            <p><span class="h5">Номинал</span> - <span class="small">1 доллар</span></p>
            <p><span class="h5">Государство</span> - <span class="small">Соединенные Штаты Америки</span></p>
            <p><span class="h5">Год выпуска</span> - <span class="small">1887</span></p>
            <p><span class="h5">Материал</span> - <span class="small">Серебро</span></p>
            <p><span class="h5">Тип монеты</span> - <span class="small">Коллекционная</span></p>
            <p><span class="h5">Сохранность</span> - <span class="small">Новая</span></p>
            <p><span class="h5">Упаковка</span> - <span class="small">Из монетного двора</span></p>
            <p><span class="h5">Серия</span> - <span class="small">Президенты</span></p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import CoinDesc from "../components/CoinDesc";
  import Breadcrumb from "../components/Breadcrumb";
  export default {
    name: "Order",
    components: {Breadcrumb, CoinDesc}
  }
</script>

<style scoped>

</style>
