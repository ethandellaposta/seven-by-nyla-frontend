import React from "react";
import Blogs from "../../components/Blogs";
import Query from "../../components/Query";
import BLOGS_QUERY from "../../queries/blog/blogs";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={BLOGS_QUERY}>
            {({ data: { blogs } }) => {
              return <Blogs blogs={blogs} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
