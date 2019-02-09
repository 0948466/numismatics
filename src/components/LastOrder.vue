<template>
  <section class="last-order  p-2 p-lg-5 mb-2 mb-lg-5">
    <div class="container-fluid">
      <div class="row justify-content-between align-items-center mb-4">
        <h2 class="mb-3">Последние заказы</h2>
        <a href="/" class="btn btn-outline-dark mb-2 mb-sm-0">Открыть каталог</a>
      </div>


      <table class="table table-striped table-responsive-lg">
        <thead>
        <tr>
          <th scope="col">Тип заявки</th>
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
            <p class="text-success">Покупка</p>
          </td>
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
            <p class="text-primary">Продажа</p>
          </td>
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
            <p class="text-primary">Продажа</p>
          </td>
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
            <p class="text-success">Покупка</p>
          </td>
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
            <p class="text-primary">Продажа</p>
          </td>
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
        <a href="/orders" class="btn-link">Открыть все заказы</a>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "LastOrder"
  }
</script>

<style scoped>

</style>