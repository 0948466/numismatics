<template>
  <section class="filters border-right p-3 pt-lg-5">
    <h2 class="mb-5">Фильтр</h2>
    <div class="mb-3">
      <p class="mb-1">Государство</p>
      <select class="selectpicker w-100" data-live-search="true">
        <option>Россия</option>
        <option>США</option>
        <option>Германия</option>
      </select>
    </div>
    <div class="mb-3">
      <p class="mb-1">Год выпуска</p>
      <select class="selectpicker w-100" data-live-search="true">
        <option>1928</option>
        <option>1930</option>
        <option>1931</option>
      </select>

    </div>
    <div class="mb-3">
      <p class="mb-1">Материал</p>
      <select class="selectpicker w-100" data-live-search="true">
        <option>Серебро</option>
        <option>Золото</option>
        <option>Медь</option>
      </select>

    </div>
    <div class="mb-3">
      <p class="mb-1">Тип монеты</p>
      <select class="selectpicker w-100" data-live-search="true">
        <option>Юбилейная</option>
        <option>Редкая</option>
      </select>
    </div>
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters">
        <i class="fas fa-angle-down"></i> <span class="ml-2">Дополнительно</span>
      </button>

    <div class="collapse" id="collapseFilters">
      <label>
        Название
        <input type="text" name="title" class="w-100">
      </label>

      <div class="mb-3">
        <p class="mb-1">Номинал</p>
        <select class="selectpicker w-100" data-live-search="true">
          <option>По убывнию</option>
          <option>По возрастанию</option>
        </select>
      </div>

      <input id="ex16a" type="text"/><br/>
    </div>

    <button type="submit" class="btn btn-primary w-100 mb-3">Применить</button>
    <button type="reset" class="btn btn-outline-dark w-100">Сбросить</button>
  </section>
</template>

<script>
  export default {
    name: 'Filters'
  };
</script>

<style scoped>

</style>
