import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// root.render(<AppLayout />);
// // React Component inside React Element.
// const title = (
//   <h1 className="title">
//     Title: Namaste React using JSX
//     <HeadingComponent />
//   </h1>
// );

// // React Element inside React Element.
// const title2 = (
//   <h1 className="title2">
//     Title2: Namaste React using JSX
//     {title}
//   </h1>
// );

// // React Element inside React Component.
// const HeadingComponent = () => (
//   <div id="container">
//     {title}
//     <h1 className="content"> Namaste React Functional Component</h1>
//   </div>
// );

// // React Component inside React Component.
// const HeadingComponent2 = ({ resName, resMenu }) => {
//   console.log(resMenu);
//   return (
//     <div id="container">
//       <HeadingComponent />
//       <h1 className="heading"> Namaste React Functional Component</h1>
//     </div>
//   );
// };
// // React Component inside React Component.
// const HeadingComponent4 = (props) => {
//   const { resName, resMenu } = props;
//   console.log(resMenu);

//   return (
//     <div id="container">
//       <input />
//     </div>
//   );
// };

// const HeadingComponent3 = () => (
//   <h1 className="heading"> Namaste React Functional Component</h1>
// );

// const Title2 = function () {
//   return <h1 className="title">Namaste React Title</h1>;
// };

// root.render(<HeadingComponent />);
