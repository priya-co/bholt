import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1> Adopt Me! </h1>
        <Router>
          <SearchParams Routerpath="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
