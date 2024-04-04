// <div id="parent">
//   <div id="child">
//     <h1>"hello js"</h1>
//   </div>
//   <div id="child1">
//     <h1>"hello js 1"</h1>
//   </div>
//   <div id="child2">
//     <h1>"hello js 2"</h1>
//   </div>
// </div>;

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hello js")
  ),
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "hello js 1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "hello js 2")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
