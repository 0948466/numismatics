<template>
  <section class="filters">
    <h2>Фильтр</h2>
    <div class="filters__item">
      <p class="filters__text">Государство</p>
      <select class="selectpicker" data-live-search="true">
        <option>Россия</option>
        <option>США</option>
        <option>Германия</option>
      </select>

    </div>
    <div class="filters__item">
      <p class="filters__text">Год выпуска</p>
      <select class="selectpicker" data-live-search="true">
        <option>1928</option>
        <option>1930</option>
        <option>1931</option>
      </select>

    </div>
    <div class="filters__item">
      <p class="filters__text">Материал</p>
      <select class="selectpicker" data-live-search="true">
        <option>Серебро</option>
        <option>Золото</option>
        <option>Медь</option>
      </select>

    </div>
    <div class="filters__item">
      <p class="filters__text">Тип монеты</p>
      <select class="selectpicker" data-live-search="true">
        <option>Юбилейная</option>
        <option>Редкая</option>
      </select>

    </div>

    <input id="ex16a" type="text"/><br/>

    <!-- Range slider: -->
    <input id="ex16b" type="text"/><br/>
    Note that the slider handle that caused the value change is focused.
  </section>
</template>

<script>
  export default {
    name: 'Filters'
  };
</script>

<style scoped>

</style>
