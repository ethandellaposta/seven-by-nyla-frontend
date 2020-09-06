import React from "react";
import { useParams } from "react-router";
import Blogs from "../../components/Blogs";
import Query from "../../components/Query";
import CATEGORY_BLOGS_QUERY from "../../queries/category/blogs";

const Category = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_BLOGS_QUERY} id={id}>
      {({ data: { category } }) => {
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>{category.name}</h1>
                <Blogs blogs={category.blogs} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;
