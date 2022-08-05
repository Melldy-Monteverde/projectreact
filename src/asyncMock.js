const products = [
  {
    id: "1",
    name: "Doom Eternal PS5",
    price: 1000,
    category: "juegos",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/498/047/products/doom-eternal1-7486e883d0de44888316463702962478-480-0.jpg",
    stock: 13,
    description: "Doom Eternal es un videojuego de acción y disparos en primera persona desarrollado por id Software y publicado por Bethesda Softworks.Es el quinto título principal de la serie Doom y la secuela directa de Doom (2016)."
  },
  {
    id: "2",
    name: "Demon Soul PS5",
    price: 1000,
    category: "juegos",
    img: "https://images.pushsquare.com/9bb3008638bd1/demons-souls-cover.cover_large.jpg",
    stock: 20,
    description: "Demon's Souls es un videojuego de rol de acción desarrollado por Bluepoint Games, con asistencia de Japan Studio, y publicado por Sony Interactive Entertainment. Es un remake de Demon's Souls, originalmente desarrollado por FromSoftware y publicado para la PlayStation 3 en 2009."
  },
  {
    id: "3",
    name: "Playstation 5",
    price: 5000,
    category: "consolas",
    img: "https://www.atajo.com.ar/images/0000PS5-STANDARD000459501PS5-STANDARD-Consola-Playstation-PS5-Standard-04.jpg",
    stock: 15,
    description: "PlayStation 5 incluyen una unidad de estado sólido personalizada para transmisión de datos de alta velocidad para permitir mejoras significativas en el rendimiento del almacenamiento, una GPU AMD capaz de mostrar una resolución de 4K de hasta 120 cuadros por segundo, trazado de rayos acelerado por hardware para realismo, iluminación y reflejos y el motor Tempest que permite efectos de audio 3D acelerados por hardware. Otras características incluyen el controlador DualSense con retroalimentación háptica y compatibilidad con versiones anteriores de la mayoría de los videojuegos de PlayStation 4 y PlayStation VR."
  },
  {
    id: "4",
    name: "Control DualSense PS5",
    price: 2000,
    category: "perifericos",
    img: "https://arsonyb2c.vtexassets.com/arquivos/ids/348023/PS5_DS_Pshot_A.jpg?v=637363644415730000.jpg",
    stock: 15,
    description: "DualSense tiene tecnología fuerte retroalimentación háptica a través de actuadores de bobina de voz, que están destinados a proporcionar una mejor retroalimentación en el juego junto con un altavoz mejorado en el control. El altavoz se ve reforzado por un nuevo conjunto de micrófonos incorporado que permite a los jugadores hablar con otros usando solo el control.El control tiene disparadores adaptativos que pueden cambiar la resistencia al jugador según sea necesario, lo que respalda una experiencia tal como sacar virtualmente una flecha de un arco. La conectividad para cargar el mando incluye un USB-C, que reemplaza el puerto microUSB en el DualShock 4, y un conector de audio de 3.5 mm."
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter((products) => products.category === category));
      }, 2000);
  })
}

export const getProductsById = (id) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find((item) => item.id === id));
      }, 2000);
  })
}