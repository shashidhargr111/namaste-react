import React from "react";
import ReactDOM from "react-dom/client";

//react element
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// console.log(heading, "heading");
//react element
const jsxHeading = (
  <h1 id="heading" className="heading">
    Hello(Namaste) React 🚀
  </h1>
);

const Title = () => (
  <div className="Heading">
    <h1>Namaste react 🚀</h1>
  </div>
);

const Heading = () => {
  return (
    <div>
      <Title />
      <h1>Hello React🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
