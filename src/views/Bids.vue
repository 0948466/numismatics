<template>
  <section class="bids mb-2 mb-lg-5">

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent pl-2 pl-lg-5">
        <li class="breadcrumb-item"><a href="/profile">Личный кабинет</a></li>
        <li class="breadcrumb-item active" aria-current="page">Все мои заявки</li>
      </ol>
    </nav>

    <div class="order__inner  p-2 p-lg-5 ">
      <h2 class="mb-3">Все мои заявки</h2>


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

    </div>

    <Pagination/>

  </section>
</template>

<script>
  import Pagination from "../components/Pagination";
  export default {
    name: "Bids",
    mounted() {
      $('.clickable-row').click(function() {
        window.location = $(this).data('href');
      });
    },
    components: {Pagination}
  }
</script>

<style scoped>

</style>