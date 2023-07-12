window.addEventListener('load', function() {
  var loader = document.querySelector('.loader');
  loader.style.display = 'none';

  setTimeout(function() {
    var contactForm = document.createElement('form');
    // Customize the form elements and attributes here

    document.body.appendChild(contactForm);
  }, 10000);

  function handleConnectionChange() {
    var notification = document.createElement('div');
    notification.textContent = navigator.onLine ? 'Connected to the internet' : 'No internet connection';
    notification.classList.add('notification');
    document.body.appendChild(notification);

    setTimeout(function() {
      document.body.removeChild(notification);
    }, 5000);
  }

  window.addEventListener('online', handleConnectionChange);
  window.addEventListener('offline', handleConnectionChange);
});
