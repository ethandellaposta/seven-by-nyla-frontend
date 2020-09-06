import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Blogs from "../Blogs";
import Blog from "../Blog";
import Category from "../Category";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Blogs} exact />
        <Route path="/blog/:id" component={Blog} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default App;
