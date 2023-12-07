import React from "react";
import { ReactDOM } from "react-dom/client";
// Creating div without using JSX

// const parent = React.createElement("h1", { id: "main-parent" }, [
//   React.createElement("div", { id: "child-div" }, "This is child div"),
//   React.createElement(
//     "h2",
//     { id: "child-div-sibling" },
//     "This is sibling child div"
//   ),
// ]);

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const jsxHeading = <h1>Namaste React</h1>;

console.log(heading);
console.log(jsxHeading);

root.render(heading);

// Both console output are same

// JSX is not HTML inside JS
// JSX is HTML Like syntax
// jsxHeading is a React element

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
