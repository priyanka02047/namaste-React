import { RestaurantCard } from "./RestaurantCard";
import { restaurantData } from "../utils/data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [data, setData] = useState();
  const [searchtext, setSearchText] = useState("");
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = () => {
    setTimeout(() => {
      setData(restaurantData);
    }, 4000);
    //Url is not working because of cors
    // const url =
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    // const data = await fetch(url);
    // const response = await data.json();
    // console.log(response);
    // setData(
    //   response.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
  };
  const filtersData =
    data !== undefined
      ? data.filter((item) =>
          item.info.name
            .toLocaleLowerCase()
            .includes(searchtext.toLocaleLowerCase())
        )
      : [];

  return filtersData === undefined ? (
    <Shimmer />
  ) : (
    <div className="body-component">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
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
        {filtersData.map((item) => (
          <RestaurantCard key={item.info.id} restaurant={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
