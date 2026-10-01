import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

function StringLiterals() {
  const name = "vasu reddy";
  const age = 22;

  return React.createElement(
    "div",
    null,

    React.createElement(
      "h2",
      null,
      "Using String Literals"
    ),

    React.createElement(
      "p",
      null,
      `Hello, my name is ${name} and I am ${age} years old.`
    )
  );
}

createRoot(document.getElementById("root")).render(
  React.createElement(StringLiterals)
);
