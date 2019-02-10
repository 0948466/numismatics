<template>
  <section class="coin-buy">
    <Breadcrumb :items="[{link: '/', text: 'Каталог'}, {link: '/coin-card', text: 'Распущенные волосы'}, { text: 'Покупка монеты'}]"/>

    <div class="p-3">
      <h1>Покупка монеты</h1>

      <form action="#">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 mb-3 p-0 pr-md-2">
              <h5>Информация о сделке</h5>
              <div class="border p-4">
                <p>Монета - "Распущенные волосы"</p>
                <p>Упаковка - Монетный двор</p>
                <p>Цена за штуку - 26450 рублей</p>
                <p>Количество - 13 штук</p>
                <p>Итого - 345 850 рублей <sup class="text-muted">* с учетом комиссии биржи</sup></p>
                <label>
                  Комментарий к заказу
                  <input type="text" class="w-100 mt-2">
                </label>
              </div>
              <button type="submit" class="btn btn-success w-100 d-flex justify-content-between align-items-center">
                <i class="far fa-arrow-alt-circle-up"></i>
                Купить
                <i class="far fa-arrow-alt-circle-up"></i>
              </button>
            </div>
            <div class="col-md-6 mb-3 p-0 pl-md-2">
              <h5>Оферта</h5>
              <div class="border p-4">
                <ol class="pl-3 pr-3">
                  <li class="mb-2">Комиссия биржи составляет 1%</li>
                  <li class="mb-2">Здесь описано важное правило</li>
                  <li class="mb-2">Здесь описано важное правило</li>
                </ol>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="submitRules">
                  <label class="form-check-label" for="submitRules">Я ознакомился с правилами и офертой</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  </section>

</template>

<script>
  import Breadcrumb from "../components/Breadcrumb";
  export default {
    name: 'CoinBuy',
    components: {Breadcrumb}
  };
</script>

<style scoped>

</style>
