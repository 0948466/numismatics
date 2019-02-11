<template>
  <div class="filters-content">
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
    <button class="btn btn-link px-0" type="button" data-toggle="collapse" data-target="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters">
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
          <option>По убыванию</option>
          <option>По возрастанию</option>
        </select>
      </div>

      <p class="mb-1">Цена за штуку</p>
      <input type="text" class="range-price" name="range-price" value=""
             data-type="double"
             data-min="0"
             data-max="1200"
             data-from="0"
             data-to="1150"
             data-skin="sharp"
      />

      <p class="mb-1">Количество в лоте</p>
      <input type="text" class="range-count" name="range-count" value=""
             data-type="double"
             data-min="0"
             data-max="100"
             data-from="0"
             data-to="50"
             data-skin="sharp"
      />
    </div>

    <button type="submit" class="btn btn-primary w-100 mb-3">Применить</button>
    <button type="reset" class="btn btn-outline-dark w-100">Сбросить</button>
  </div>
</template>

<script>
  export default {
    name: "FiltersContent"
  }
</script>

<style scoped>

</style>
