import React from "react";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? blog.image.url
      : process.env.REACT_APP_BACKEND_URL + blog.image.url;
  return (
    <Link to={`/blog/${blog.id}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img src={imageUrl} alt={blog.image.url} height="100" />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {blog.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {blog.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
