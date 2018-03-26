(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors.
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );

  window.addEventListener('load', function() {
    if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
      navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
          // updatefound is fired if service-worker.js changes.
          window.swRegistration = registration
          registration.onupdatefound = function() {
            // updatefound is also fired the very first time the SW is installed,
            // and there's no need to prompt for a reload at that point.
            // So check here to see if the page is already controlled,
            // i.e. whether there's an existing service worker.
            if (navigator.serviceWorker.controller) {
              // The updatefound event implies that registration.installing is set
              var installingWorker = registration.installing;

              installingWorker.onstatechange = function() {
                switch (installingWorker.state) {
                  case 'installed':
                    const title = 'Application mise à jour';
                    const options = {
                      body: 'Votre application viens d\'être mise à jour, merci de rafraichir votre page.'
                    };

                    registration.showNotification(title, options);
                    break;

                  case 'redundant':
                    throw new Error('The installing ' +
                      'service worker became redundant.');

                  default:
                    // Ignore
                }
              };
            }
          };
        }).catch(function(e) {
          console.error('Error during service worker registration:', e);
        });
    }
  });
})();
