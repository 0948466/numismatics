<template>
  <section class="coin-desc p-2 pl-lg-5 pr-lg-5 pb-lg-5 border-bottom mb-2 mb-lg-5">
    <h1 class="mb-4">"Распущенные волосы"</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 mr-auto mb-3 mb-md-1">
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
</template>

<script>
  export default {
    name: 'CoinDesc'
  };
</script>

<style scoped>

</style>
