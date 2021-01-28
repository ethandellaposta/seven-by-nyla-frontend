import React from "react";
import { Switch, Route } from "react-router-dom";

import { ServicePage } from "./service";
import { HomePage } from "./home";
import { Nav, Footer } from "./common";


function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/services/:id" component={ServicePage} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
