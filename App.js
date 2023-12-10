import React from "react";
import { ReactDOM } from "react-dom/client";

// React Element
const heading = <h1 className="head">Namaste React using JSX</h1>;

// React Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading"> Namaste React Functional Component</h1>
  </div>
);
const HeadingComponent2 = () => {
  return (
    <div id="container">
      <h1 className="heading"> Namaste React Functional Component</h1>
    </div>
  );
};

const HeadingComponent3 = () => (
  <h1 className="heading"> Namaste React Functional Component</h1>
);

const Title = () => <h1 className="title">Namaste React Title</h1>;

// //We render react element like this
// root.render(heading);

//We render react component like this
root.render(<HeadingComponent />);
