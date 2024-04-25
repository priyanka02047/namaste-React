import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {
  const { resId } = useParams(); // it will fetch the resid from url
  useEffect(() => {
    //Add fetch Api to fetch restaurant menu items.
    console.log("id of restaurant", resId);
  }, [resId]);
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
