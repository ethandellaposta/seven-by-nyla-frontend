import React from "react";
import { useParams } from "react-router";
import { Query } from "../common";

import Home from "./Home";

import HOME_QUERY from "./query";

const HomeContainer = () => {
  return (
    <Query query={HOME_QUERY}>
      {res => <Home data={res} />}
    </Query>
  );
};

export default HomeContainer;
