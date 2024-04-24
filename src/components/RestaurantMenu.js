import { useEffect, useState } from "react";

export const RestaurantMenu = ({ id }) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  useEffect(() => {
    //Add fetch Api to fetch restaurant menu items.
    console.log("id of restaurant", id);
  }, [id]);
  //   const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
  //     restaurant.info;

  return (
    <div className="menu">
      <div className="name"> Restaurant Name</div>
      <div className="cuisines"> Cuisines</div>
      <div className="cuisines"> cost for two:</div>
      <div className="items">
        <h4>menu items</h4>
      </div>
    </div>
  );
};
