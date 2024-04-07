export const RestaurantCard = ({ restaurant }) => {
  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    restaurant.info;

  return (
    <div className="cart">
      <div className="image-box">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>
      </div>
      <div className="cart-details">
        <h5>{name}</h5>
        <h5>{cuisines.join(",")}</h5>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>{avgRating}</h5>
          <h5>{costForTwo}</h5>
        </div>
      </div>
    </div>
  );
};
