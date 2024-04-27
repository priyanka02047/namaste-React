import { useEffect, useState } from "react";
import { restaurantData } from "./data";
const useRestaurantList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = () => {
    // cores soution :- https://github.com/HarshithaSolai/instafood-server/blob/main/solution.md
    setTimeout(() => {
      setData(restaurantData);
    }, 4000);
    // //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId=415896&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER
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
  return data;
};

export default useRestaurantList;
