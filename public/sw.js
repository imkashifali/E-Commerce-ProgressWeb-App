let cacheUserData = "user_data";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheUserData).then((data) => {
      data.addAll([
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "index.html",
        "/Header.js",
        "/Header.css",
        "/Home.js",
        "/Home.css",
        "/Product.js",
        "/Product.css",
        "/Checkout.js",
        "/Checkout.css",
        "/Subtotal.js",
        "/Subtotal.css",
        "/CheckoutProduct.js",
        "/CheckoutProduct.css",
        "/checkOut.js",
        "/checkOut.css",
        "/Footer.js",
        "/Footer.css",
        "/Orders.js",
        "/Orders.css",
        "/Order.js",
        "/Order.css",
        "/Payment.js",
        "/Payment.css",
        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
