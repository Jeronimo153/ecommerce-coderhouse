import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import products from "./products.json";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProductos(products);
    }, 2000);
  }, []);

  if (productos.length === 0) {
    return "Loading...";
  } else {
    return <ItemList data={productos} />
  }
};

export default ItemListContainer;
