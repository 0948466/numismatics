export default function initScript() {
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
}
