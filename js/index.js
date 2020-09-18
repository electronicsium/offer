function product(id, imgsrc, price, title) {
  div1 = document.createElement("div");
  div1.setAttribute("class", "col-lg-3 col-sm-6");
  div2 = document.createElement("div");
  div2.setAttribute("class", "product-item");

  div3 = document.createElement("div");
  div3.setAttribute("class", "pi-pic");

  img = document.createElement("img");
  img.setAttribute("src", imgsrc);

  div4 = document.createElement("div");
  div4.setAttribute("class", "pi-text");
  h6 = document.createElement("h6");
  h6.textContent = price;
  p = document.createElement("p");
  p.textContent = title;

  a = document.createElement("a");
  a.setAttribute("href", `product.html?pid=${id}`);
  a.setAttribute("target", "_blank");

  div4.appendChild(h6);
  div4.appendChild(p);
  div3.appendChild(img);
  div2.appendChild(div3);
  div2.appendChild(div4);
  a.appendChild(div2);
  div1.appendChild(a);

  document.getElementById("main-root").appendChild(div1);
}

let next;

function get_data(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((e) => {
        product(e.id, `${backend_url}${e.img}`, `${e.price}`, e.title);
      });
      next = data.next;
      if (next == null) {
        document.getElementById("seemore").style.display = "none";
      }
    });
}

get_data(`${backend_url}/products`);

document.getElementById("seemore").addEventListener("click", () => {
  get_data(next);
});
