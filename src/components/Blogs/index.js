import React from "react";
import Card from "../Card";

const Blogs = ({ blogs }) => {
  const leftBlogsCount = Math.ceil(blogs.length / 5);
  const leftBlogs = blogs.slice(0, leftBlogsCount);
  const rightBlogs = blogs.slice(leftBlogsCount, blogs.length);

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftBlogs.map((blog, i) => {
            return <Card blog={blog} key={`blog__${blog.id}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightBlogs.map((blog, i) => {
              return <Card blog={blog} key={`blog__${blog.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
