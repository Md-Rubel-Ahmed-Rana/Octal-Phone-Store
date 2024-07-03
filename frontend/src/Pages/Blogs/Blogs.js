import React from "react";
import { blogsData } from "../../constants/blogsData";

const Blogs = () => {
  return (
    <div className="p-4 lg:px-20 py-10 grid lg:grid-cols-2 gap-10">
      {blogsData.map((blog, index) => (
        <div key={index} className="bg-[#F2f2f2] rounded-md p-3 lg:p-5">
          <h3 className="text-2xl mb-4 font-bold">{blog.title}</h3>
          <p>{blog.desc}</p>
          {blog.points && (
            <>
              <h6 className="text-lg mb-2 font-semibold">
                There are many ways to manage state in React application.
              </h6>
              <ul className="list-none grid grid-cols-3">
                {blog.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blogs;
