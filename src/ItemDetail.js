import Contador from "./Contador";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div className="itemDetailContainer">
      <div className="itemDetailImg">
        <img src={item.imgUrl} alt={item.title} />
      </div>
      <div className="itemDetailInfoContainer">
        <p className="itemDetailTitle">{item.name}</p>
        <Contador />
      </div>
    </div>
  );
};

export default ItemDetail;
