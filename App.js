import ReactDOM from "react-dom/client";
import { restaurantData } from "./data";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
    </div>
    <div className="nav-menu">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Offers</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = ({ restaurant }) => {
  debugger;
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

const Body = () => {
  return (
    <div className="body-component">
      <div className="search">
        <input type="text" placeholder="Search"></input>
        <button type="submit">Search</button>
      </div>
      <div className="res-container">
        {restaurantData.map((item) => (
          <RestaurantCard key={item.info.id} restaurant={item} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// // <div id="parent">
// //   <div id="child">
// //     <h1>"hello js"</h1>
// //   </div>
// //   <div id="child1">
// //     <h1>"hello js 1"</h1>
// //   </div>
// //   <div id="child2">
// //     <h1>"hello js 2"</h1>
// //   </div>
// // </div>;

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "hello js")
//   ),
//   React.createElement(
//     "div",
//     { id: "child1" },
//     React.createElement("h1", {}, "hello js 1")
//   ),
//   React.createElement(
//     "div",
//     { id: "child2" },
//     React.createElement("h1", {}, "hello js 2")
//   ),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
