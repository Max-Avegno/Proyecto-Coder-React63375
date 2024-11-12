import { useState, useEffect } from "react";
import { getProducts } from "../asyncMock"; 
import ItemList from "./itemlist";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((res) => {
        
        setProductos(res);
        setLoading(false);
      })
      .catch((err) => {
        
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2>{props.greeting}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={productos} />
      )}
    </>
  );
}

export default ItemListContainer;