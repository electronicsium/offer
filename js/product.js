$(document).ready(function () {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var pid = url.searchParams.get("pid");

  fetch(`${backend_url}/product/${pid}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("price").textContent = `$${data.price}`;
      document.getElementById("pid").textContent = `Product ID: P${data.id}`;
      document.getElementById("link").href = `http://m.me/${data.fb}`;
      document.getElementById("p-img").src = `${backend_url}${data.img}`;
      $("#preloder").fadeOut();
    });
});
