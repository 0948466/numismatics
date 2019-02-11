export default function initRange() {
  const rangePrice = $(".range-price")
  const rangeCount = $(".range-count")

  if (rangePrice.length) {
    rangePrice.ionRangeSlider();
  }
  if (rangeCount.length) {
    rangeCount.ionRangeSlider();
  }

}
