<template>
  <section class="catalog  p-3 pt-lg-5">
    <div class="container-fluid">
      <div class="row justify-content-between align-items-center mb-4">
        <h2 class="mb-0 mb-md-3">Каталог</h2>
        <p class="d-none d-sm-block">Найдено 613 монет</p>
          <a class="d-block d-sm-none btn-link toggle-filter">
            <i class="fas fa-filter text-primary" style="font-size: 20px"></i>
            Фильтр
          </a>
      </div>
    </div>

    <div class="catalog__filters border p-1 p-md-2 pl-md-3 pr-md-3 mb-3">
      <button class="btn btn-outline-dark mr-3 mb-2 filter-check" data-href="state">
        Государство - Россия <i class="fas fa-times ml-2"></i>
      </button>
      <button class="btn btn-outline-dark mr-3 mb-2 filter-check" data-href="age">
        Год выпуска - 1887 <i class="fas fa-times ml-2"></i>
      </button>
      <button class="btn btn-outline-dark mr-3 mb-2 filter-check" data-href="material">
        Материал - Серебро <i class="fas fa-times ml-2"></i>
      </button>
      <button class="btn btn-outline-dark mr-3 filter-check" data-href="type">
        Тип - Юбилейная <i class="fas fa-times ml-2"></i>
      </button>
    </div>


    <div class="filter-mobile px-3 pt-1 pb-4">
      <div class="container mb-4">
        <div class="row justify-content-between align-items-center">
          <h2 class="mb-0">Фильтры</h2>
          <button type="button" class="close-filters h2 mb-5" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>

      <FiltersContent />
    </div>
    <table class="table table-striped table-responsive-lg">
      <thead>
      <tr>
        <th scope="col">Изображение</th>
        <th scope="col">Государство</th>
        <th scope="col">Год выпуска</th>
        <th scope="col">Номинал</th>
        <th scope="col">Наименование</th>
        <th scope="col">Котировка</th>
      </tr>
      </thead>
      <tbody>
      <tr class='clickable-row' data-href='/coin-card'>
        <td class="text-center align-middle">
          <img src="../assets/image/coin.png" alt="Coin" width="40" height="40">
        </td>
        <td class="text-center align-middle">РФ</td>
        <td class="text-center align-middle">2019</td>
        <td class="text-center align-middle">25 рублей</td>
        <td class="text-center align-middle">Блокада</td>
        <td class="text-center align-middle">30</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td class="text-center align-middle">
          <img src="../assets/image/coin.png" alt="Coin" width="40" height="40">
        </td>
        <td class="text-center align-middle">РФ</td>
        <td class="text-center align-middle">2019</td>
        <td class="text-center align-middle">25 рублей</td>
        <td class="text-center align-middle">Блокада</td>
        <td class="text-center align-middle">30</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td class="text-center align-middle">
          <img src="../assets/image/coin.png" alt="Coin" width="40" height="40">
        </td>
        <td class="text-center align-middle">РФ</td>
        <td class="text-center align-middle">2019</td>
        <td class="text-center align-middle">25 рублей</td>
        <td class="text-center align-middle">Блокада</td>
        <td class="text-center align-middle">30</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td class="text-center align-middle">
          <img src="../assets/image/coin.png" alt="Coin" width="40" height="40">
        </td>
        <td class="text-center align-middle">РФ</td>
        <td class="text-center align-middle">2019</td>
        <td class="text-center align-middle">25 рублей</td>
        <td class="text-center align-middle">Блокада</td>
        <td class="text-center align-middle">30</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td class="text-center align-middle">
          <img src="../assets/image/coin.png" alt="Coin" width="40" height="40">
        </td>
        <td class="text-center align-middle">РФ</td>
        <td class="text-center align-middle">2019</td>
        <td class="text-center align-middle">25 рублей</td>
        <td class="text-center align-middle">Блокада</td>
        <td class="text-center align-middle">30</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td class="text-center align-middle">
          <img src="../assets/image/coin.png" alt="Coin" width="40" height="40">
        </td>
        <td class="text-center align-middle">РФ</td>
        <td class="text-center align-middle">2019</td>
        <td class="text-center align-middle">25 рублей</td>
        <td class="text-center align-middle">Блокада</td>
        <td class="text-center align-middle">30</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td class="text-center align-middle">
          <img src="../assets/image/coin.png" alt="Coin" width="40" height="40">
        </td>
        <td class="text-center align-middle">РФ</td>
        <td class="text-center align-middle">2019</td>
        <td class="text-center align-middle">25 рублей</td>
        <td class="text-center align-middle">Блокада</td>
        <td class="text-center align-middle">30</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td class="text-center align-middle">
          <img src="../assets/image/coin.png" alt="Coin" width="40" height="40">
        </td>
        <td class="text-center align-middle">РФ</td>
        <td class="text-center align-middle">2019</td>
        <td class="text-center align-middle">25 рублей</td>
        <td class="text-center align-middle">Блокада</td>
        <td class="text-center align-middle">30</td>
      </tr>
      <tr class='clickable-row' data-href='/coin-card'>
        <td class="text-center align-middle">
          <img src="../assets/image/coin.png" alt="Coin" width="40" height="40">
        </td>
        <td class="text-center align-middle">РФ</td>
        <td class="text-center align-middle">2019</td>
        <td class="text-center align-middle">25 рублей</td>
        <td class="text-center align-middle">Блокада</td>
        <td class="text-center align-middle">30</td>
      </tr>
      </tbody>
    </table>

    <Pagination/>
  </section>
</template>

<script>
  import Pagination from './Pagination';
  import FiltersContent from "./FiltersContent";
  export default {
    name: 'Catalog',
    components: {FiltersContent, Pagination }
  };
</script>

<style scoped>

</style>
