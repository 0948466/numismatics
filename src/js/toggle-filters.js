export default function initToggleFilters() {
  const toggleFilter = $(".toggle-filter")
  const filterMobile = $(".filter-mobile")
  const closeFilters = $(".close-filters")

  function onToggleFilterClick() {
    filterMobile.show()
    setTimeout(function () {
      filterMobile.addClass('filter-mobile_add-drop')
    }, 0)
  }

  if (toggleFilter.length && toggleFilter.is(":visible")) {
    toggleFilter.on('click', onToggleFilterClick)
  }

  function onCloseFiltersClick() {
    filterMobile.removeClass('filter-mobile_add-drop')
  }

  if (closeFilters.length) {
    closeFilters.on('click', onCloseFiltersClick)
  }
}
