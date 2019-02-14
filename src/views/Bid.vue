<template>
    <section class="bid">
      <Breadcrumb :items="[{link: 'profile', text: 'Личный кабинет'}, {link: 'bids', text: 'Мои заявки'}, { text: 'Покупка монеты'}]"/>

      <div class="bid__inner p-3">
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

      <CoinDesc class="border-0 p-3"/>
    </section>
</template>

<script>
  export default {
    name: "Bid"
  }
</script>


  <script>
    import CoinDesc from "../components/CoinDesc";
    import Breadcrumb from "../components/Breadcrumb";
    export default {
      components: {Breadcrumb, CoinDesc}
    }
  </script>
