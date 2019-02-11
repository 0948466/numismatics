export default function initFilters() {
  const filterCheck = $('.filter-check')

  if (!filterCheck.length) {
    return
  }

  function removeURLParameter(url, parameter) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

      var prefix = encodeURIComponent(parameter) + '=';
      var pars = urlparts[1].split(/[&;]/g);

      for (var i = pars.length; i-- > 0;) {
        if (pars[i].lastIndexOf(prefix, 0) !== -1) {
          pars.splice(i, 1);
        }
      }

      return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    }
    return url;
  }

  function onFilterClick () {
    const url = removeURLParameter(window.location.search, $(this).data('href')) || '/'
    window.location = url
  }

  filterCheck.on('click', onFilterClick)
}
