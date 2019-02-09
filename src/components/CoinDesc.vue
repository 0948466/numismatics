<template>
  <section class="coin-desc p-2 pl-lg-5 pr-lg-5 pb-lg-5 border-bottom mb-2 mb-lg-5">
    <h1 class="mb-4">"Распущенные волосы"</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 mr-auto">
          <a class="d-block w-100 mb-4" data-fancybox="gallery" :href="require('../assets/image/RR5714-0011.png')">
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
        <div class="col-md-6">
          <h5>Описание</h5>
          <p>Описание Описание Описание Описание</p>
          <p>Номинал - <span>1 доллар</span></p>
          <p>Государство - <span>Соединенные Штаты Америки</span></p>
          <p>Год выпуска - <span>1887</span></p>
          <p>Материал - <span>Серебро</span></p>
          <p>Тип монеты - <span>Коллекционная</span></p>
          <p>Сохранность - <span>Новая</span></p>
          <p>Упаковка - <span>Из монетного двора</span></p>
          <p>Серия - <span>Президенты</span></p>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
  export default {
    name: 'CoinDesc'
  };
</script>

<style scoped>

</style>
