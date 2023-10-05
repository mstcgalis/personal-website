document.addEventListener('DOMContentLoaded', function() {
  var randomButton = document.getElementById('randomButton');
  if (!randomButton) return;

  var urls = JSON.parse(randomButton.dataset.urls);
  randomButton.addEventListener('click', function(e) {
    e.preventDefault();
    var currentUrl = window.location.pathname;
    var randomUrl;
    do {
      randomUrl = urls[Math.floor(Math.random() * urls.length)];
    } while (randomUrl === currentUrl);
    window.location.href = randomUrl;
  });
});