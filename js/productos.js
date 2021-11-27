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

    contenedor.append(
      "<div class='producto'><img src= ' " +
        product.image +
        " ' alt='' /><p class='title'>" +
        x +
        "</p><p class='price'>$" +
        product.price +
        "</p></div>"
    );
  });
}
