export default function initScript() {
  $('.clickable-row').click(function() {
    window.location = $(this).data('href');
  });
}
