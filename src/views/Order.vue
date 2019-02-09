<template>
  <section class="order">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent pl-2 pl-lg-5">
        <li class="breadcrumb-item"><a href="/profile">Личный кабинет</a></li>
        <li class="breadcrumb-item"><a href="/orders">Мои заказы</a></li>
        <li class="breadcrumb-item active" aria-current="page">Покупка монеты</li>
      </ol>
    </nav>

    <div class="order__inner p-2 p-lg-5 ">
      <h2 class="mb-3">Покупка монеты <i class="fas fa-check-circle"></i></h2>
      <h5>Информация о сделке</h5>
      <div class="border p-4">
        <p>Монета - "Распущенные волосы"</p>
        <p>Упаковка - Монетный двор</p>
        <p>Цена за штуку - 26450 рублей</p>
        <p>Количество - 13 штук</p>
        <p>Итого - 345 850 рублей</p>
      </div>
    </div>

    <CoinDesc class="border-0"/>
  </section>
</template>

<script>
  import CoinDesc from "../components/CoinDesc";
  export default {
    name: "Order",
    components: {CoinDesc}
  }
</script>

<style scoped>

</style>