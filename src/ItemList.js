//import { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
    // console.log(data)
    return (
      <div className="itemListContainer">
        {data.map((product) => (
            <Item
            key={product.id}
              title={product.name.toLowerCase()}
              description={product.description.toLowerCase()}
              price={product.price}
              imgUrl={product.imgUrl}
            />
        ))}
      </div>
    );
};

export default ItemList;
