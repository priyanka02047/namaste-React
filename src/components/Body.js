import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const value = useRestaurantList();
  const [data, setData] = useState();
  const onlineStatus = useOnlineStatus();

  const [searchtext, setSearchText] = useState("");
  // it has new component with label inside it HOC
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    setData(value);
  }, [value]);
  const filtersData =
    data !== undefined
      ? data.filter((item) =>
          item.info.name
            .toLocaleLowerCase()
            .includes(searchtext.toLocaleLowerCase())
        )
      : [];

  if (!onlineStatus) {
    return <h1>You are offline please check internet connection.</h1>;
  }
  return filtersData === undefined || filtersData.length === 0 ? (
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
          <Link to={`/restaurant/${item.info.id}`} key={item.info.id}>
            {item.info.promoted ? (
              <RestaurantCardPromoted restaurant={item} />
            ) : (
              <RestaurantCard restaurant={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
