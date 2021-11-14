import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import products from "./products.json";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    useEffect(() => {
        setItem(products[0]);
    },[])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer
