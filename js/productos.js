"use strict";

$(document).ready(function () {
  fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then((products) => {
      $(".dot-flashing").css("display", "none");
      cargaprod(products);
    });
});

function cargaprod(productos) {
  productos.map((product) => {
    let contenedor = $(".productosp");

    var x = product.title;

    var y = x.split(" ").slice(0, 6).join(" ");

    contenedor.append(
      "<div class='producto'><img src= ' " +
        product.image +
        " ' alt='' /><p class='title'>" +
        y +
        "</p><p class='price'>$" +
        product.price +
        "</p></div>"
    );
  });
}
