import React from "react";
import { useParams } from "react-router";
import { Query } from "../common";

import Service from "./Service";

import SERVICE_QUERY from "./query";

const ServiceContainer = () => {
  let { id } = useParams();
  return (
    <Query query={SERVICE_QUERY} id={id}>
      {({ data: { service } }) => <Service data={service} />}
    </Query>
  );
};

export default ServiceContainer;
