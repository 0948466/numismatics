<template>
  <table class="table table-bordered table-responsive-lg">
    <thead>
    <tr>
      <th scope="col">Упаковка</th>
      <th scope="col">Цена за 1 шт.</th>
      <th scope="col">Кол-во</th>
      <th scope="col">Итого</th>
    </tr>
    </thead>
    <tbody>

    <template v-for="item in 6">
      <tr>
        <td colspan="4"></td>
      </tr>

      <tr class="clickable-row-2 bg-primary" :data-href="link">
        <td class="p-2" colspan="4"></td>
      </tr>
      <tr class="clickable-row-2" :data-href="link">
        <td>Монетный двор</td>
        <td>26.600 Р</td>
        <td>10</td>
        <td>266.000 Р</td>
      </tr>
      <tr class="clickable-row-2" :data-href="link">
        <td class="p-0" colspan="4">
          <div class="btn bg-primary text-light border-0 rounded-0 d-flex justify-content-between align-items-center">
            <i class="far fa-arrow-alt-circle-up"></i>
            Продать
            <i class="far fa-arrow-alt-circle-up"></i>
          </div>
        </td>
      </tr>
    </template>

    <tr>
      <td colspan="4"></td>
    </tr>

    </tbody>
  </table>
</template>

<script>
  export default {
    name: "TableSaleContent",
    props: ['link'],
    mounted() {
      this.initScript()
      this.initCalc()
    },
    methods: {
      initScript() {
        const clickableRow = $('.clickable-row')
        if (clickableRow.length) {
          clickableRow.click(function() {
            window.location = $(this).data('href');
          });
        }
        const clickableRow2 = $('.clickable-row-2')
        if (clickableRow2.length) {
          clickableRow2.click(function() {
            window.location = $(this).data('href');
          });
        }
      },

      initCalc() {
        const quantityInput = $('#quantity')
        const priceInput = $('#price')

        if (!quantityInput.length) {
          return
        }

        const resultPrice = $('.result-price')

        function changeResult() {
          try {
            let result = quantityInput.val() * priceInput.val()

            if (result !== result) {
              result = 0
            }
            resultPrice.text(result)
          } catch (e) {
            console.error(e)
          }

        }

        changeResult()

        quantityInput.on('input', changeResult)
        priceInput.on('input', changeResult)

      },
    },

  }
</script>

<style scoped>

</style>