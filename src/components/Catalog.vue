<template>
  <section class="catalog">
    <h1>Каталог</h1>

    <table class="table table-striped table-responsive-lg">
      <thead>
      <tr>
        <th scope="col">Фото</th>
        <th scope="col">Монета</th>
        <th scope="col">Котировка</th>
        <th scope="col">Страна</th>
        <th scope="col">Год</th>
        <th scope="col">Материал</th>
        <th scope="col">Тип</th>
      </tr>
      </thead>
      <tbody>
      <tr class='clickable-row' data-href='/coin-card'>
        <td>1</td>
        <td>
          Петр 1<br>
          5 рублей
        </td>
        <td>1350 р</td>
        <td>Россия</td>
        <td>1888</td>
        <td>Серебро</td>
        <td>Юб.</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td>1</td>
        <td>
          Петр 1<br>
          5 рублей
        </td>
        <td>1350 р</td>
        <td>Россия</td>
        <td>1888</td>
        <td>Серебро</td>
        <td>Юб.</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td>1</td>
        <td>
          Петр 1<br>
          5 рублей
        </td>
        <td>1350 р</td>
        <td>Россия</td>
        <td>1888</td>
        <td>Серебро</td>
        <td>Юб.</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td>1</td>
        <td>
          Петр 1<br>
          5 рублей
        </td>
        <td>1350 р</td>
        <td>Россия</td>
        <td>1888</td>
        <td>Серебро</td>
        <td>Юб.</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td>1</td>
        <td>
          Петр 1<br>
          5 рублей
        </td>
        <td>1350 р</td>
        <td>Россия</td>
        <td>1888</td>
        <td>Серебро</td>
        <td>Юб.</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td>1</td>
        <td>
          Петр 1<br>
          5 рублей
        </td>
        <td>1350 р</td>
        <td>Россия</td>
        <td>1888</td>
        <td>Серебро</td>
        <td>Юб.</td>
      </tr>
      </tbody>
    </table>

    <Pagination/>
  </section>
</template>

<script>
  import Pagination from './Pagination';
  export default {
    name: 'Catalog',
    components: { Pagination }
  };
</script>

<style scoped>

</style>
