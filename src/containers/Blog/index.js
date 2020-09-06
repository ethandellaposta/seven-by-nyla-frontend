import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import BLOG_QUERY from "../../queries/blog/blog";

const Blog = () => {
  let { id } = useParams();
  return (
    <Query query={BLOG_QUERY} id={id}>
      {({ data: { blog } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? blog.image.url
            : process.env.REACT_APP_BACKEND_URL + blog.image.url;
        return (
          <div>
            <div
              id="banner"
              className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
              data-src={imageUrl}
              data-srcset={imageUrl}
              data-uk-img
            >
              <h1>{blog.title}</h1>
            </div>

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={blog.content} />
                <p>
                  <Moment format="MMM Do YYYY">{blog.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Blog;
