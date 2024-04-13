import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/About";
import Error from "./components/Error";
const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);

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
