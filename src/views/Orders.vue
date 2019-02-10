<template>
  <section class="orders mb-2 mb-lg-5">
    <Breadcrumb :items="[{link: '/profile', text: 'Личный кабинет'}, { text: 'Все мои заказы'}]"/>

    <div class="orders__inner p-2 p-md-3">
      <div class="container-fluid">
        <div class="row justify-content-between align-items-center mb-4">
          <h2 class="mb-2 mb-md-0">Все мои заказы</h2>
          <div class="row m-0 border pl-2 pr-2">
            <a href="/sort" class="btn btn-outline-secondary border-0 mr-2 active">Все заказы</a>
            <a href="/sort" class="btn btn-outline-secondary border-0 mr-2">Только покупка</a>
            <a href="/sort" class="btn btn-outline-secondary border-0">Только продажа</a>
          </div>
        </div>
      </div>


      <table class="table table-striped table-responsive-lg">
        <thead>
        <tr>
          <th scope="col">Дата</th>
          <th scope="col">Лот</th>
          <th scope="col">Объем</th>
          <th scope="col">Цена</th>
          <th scope="col">Итого</th>
          <th scope="col">Статус</th>
        </tr>
        </thead>
        <tbody>
        <tr class='clickable-row' data-href='/order'>
          <td>
            20.01.2019
          </td>
          <td>Петр 1<br>
            5 рублей</td>
          <td>250 шт.</td>
          <td>1000 Р</td>
          <td>25 000 Р</td>
          <td>
            <p class="text-info">
              <i class="fas fa-exclamation-circle"></i>
              На проверке
            </p>
          </td>
        </tr>
        <tr class='clickable-row' data-href='/order'>
          <td>
            20.01.2019
          </td>
          <td>Петр 1<br>
            5 рублей</td>
          <td>250 шт.</td>
          <td>1000 Р</td>
          <td>25 000 Р</td>
          <td>
            <p class="text-success">
              <i class="fas fa-check-circle"></i>
              Одобрено
            </p>
          </td>
        </tr>
        <tr class='clickable-row' data-href='/order'>
          <td>
            20.01.2019
          </td>
          <td>Петр 1<br>
            5 рублей</td>
          <td>250 шт.</td>
          <td>1000 Р</td>
          <td>25 000 Р</td>
          <td>
            <p class="text-danger">
              <i class="fas fa-times-circle"></i>
              Отклонено
            </p>
          </td>
        </tr>
        <tr class='clickable-row' data-href='/order'>
          <td>
            20.01.2019
          </td>
          <td>Петр 1<br>
            5 рублей</td>
          <td>250 шт.</td>
          <td>1000 Р</td>
          <td>25 000 Р</td>
          <td>
            <p class="text-info">
              <i class="fas fa-exclamation-circle"></i>
              На проверке
            </p>
          </td>
        </tr>
        <tr class='clickable-row' data-href='/order'>
          <td>
            20.01.2019
          </td>
          <td>Петр 1<br>
            5 рублей</td>
          <td>250 шт.</td>
          <td>1000 Р</td>
          <td>25 000 Р</td>
          <td>
            <p class="text-success">
              <i class="fas fa-check-circle"></i>
              Одобрено
            </p>
          </td>
        </tr>

        </tbody>
      </table>

      <div class="text-right">
        <a href="#" class="btn-link">Показать больше заказов</a>
      </div>

    </div>

    <Pagination/>

  </section>
</template>

<script>
  import Pagination from "../components/Pagination";
  import Breadcrumb from "../components/Breadcrumb";
  export default {
    name: "Orders",
    mounted() {
      $('.clickable-row').click(function() {
        window.location = $(this).data('href');
      });
    },
    components: {Breadcrumb, Pagination}
  }
</script>

<style scoped>

</style>