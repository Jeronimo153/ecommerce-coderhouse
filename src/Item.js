const Item = ({ id, title, imgUrl, price }) => {
  return (
    <div className="itemCard" id={id}>
      <div className="itemImg">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="itemInfo">
        <p className="itemPrice">$ {price}</p>
        <p className="itemTitle">
          {title.length > 50 ? title.substring(0, 50)+'...' : title}
        </p>
      </div>
    </div>
  );
};

export default Item;
