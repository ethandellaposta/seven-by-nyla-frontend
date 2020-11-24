import React from "react";
import { Switch, Route } from "react-router-dom";

import { ServicePage } from "./service";
import { Nav, Footer } from "./common";

function App() {
  return (
    <div className="flex flex-col p-10 justify-between ">
      <Nav />
      <Switch>
        <Route path="/services/:id" component={ServicePage} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
