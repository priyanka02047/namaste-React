import { RestaurantCard } from "./RestaurantCard";
import { restaurantData } from "../utils/data";
import { useState } from "react";
const Body = () => {
  const [data, setData] = useState(restaurantData);
  return (
    <div className="body-component">
      <div className="search">
        <input type="text" placeholder="Search"></input>
        <button type="submit">Search</button>
        <button
          type="submit"
          onClick={() => {
            setData(
              data.filter((item) => {
                return item.info.avgRating > 4;
              })
            );
          }}
        >
          Filter restaurant
        </button>
      </div>
      <div className="res-container">
        {data.map((item) => (
          <RestaurantCard key={item.info.id} restaurant={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
