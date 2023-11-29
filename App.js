// Creating div without using JSX

const parent = React.createElement("h1", { id: "main-parent" }, [
  React.createElement("div", { id: "child-div" }, "This is child div"),
  React.createElement(
    "h2",
    { id: "child-div-sibling" },
    "This is sibling child div"
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
