export default function initCalc() {
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

}