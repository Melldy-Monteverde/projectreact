const products = [
  {
    id: "1",
    name: "Doom Eternal PS5",
    price: 1000,
    category: "juego",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/498/047/products/doom-eternal1-7486e883d0de44888316463702962478-480-0.jpg",
    stock: 25,
    description: "Doom Eternal",
  },
  {
    id: "2",
    name: "Demon Soul PS5",
    price: 1000,
    category: "juego",
    img: "https://images.pushsquare.com/9bb3008638bd1/demons-souls-cover.cover_large.jpg",
    stock: 16,
    description: "Demon Souls PS5",
  },
  {
    id: "3",
    name: "Playstation 5",
    price: 3000,
    category: "Consola",
    img: "https://www.atajo.com.ar/images/0000PS5-STANDARD000459501PS5-STANDARD-Consola-Playstation-PS5-Standard-04.jpg",
    stock: 10,
    description: "Playstation 5 Standar Edition",
  },
];

export const getProductsDeTienda = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};
