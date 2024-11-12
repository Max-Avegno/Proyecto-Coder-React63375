const products = [
    {
      id: "1",
      name: "Playstation 5",
      price: 1000,
      category: "Sony",
      img: "https://http2.mlstatic.com/D_Q_NP_2X_821666-MLA74019269225_012024-T.webp",
      stock: 25,
      description: "Descripcion de play 5",
    },
    {
      id: "2",
      name: "Playstation 4",
      price: 800,
      category: "Sony",
      img: "https://http2.mlstatic.com/D_NQ_NP_685737-MLA74782362181_022024-O.webp",
      stock: 16,
      description: "Descripcion de Playstation 4",
    },
    {
      id: "3",
      name: "Xbox series X",
      price: 1200,
      category: "Microsoft",
      img: "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png",
      stock: 0,
      description: "Descripcion de Xbox series X",
    },
    {
      id: "4",
      name: "Xbox series S",
      price: 1200,
      category: "Microsoft",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdukz-Tos25AxRF5LJQUha_wb96eiWQXSpjA&s",
      stock: 0,
      description: "Descripcion de Xbox series S",

    },
  ];
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 2500);
    });
  };
  
  export const getProductByID = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 2500);
    });
  };