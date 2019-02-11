import initScript from './script'
import initSelector from './bootstrap-selector';
import initRange from './range';
import initCalc from './calc';
import initFilters from './filters';


$(document).ready(() => {
  initScript()
  initSelector()
  initRange()
  initCalc()
  initFilters()
})
