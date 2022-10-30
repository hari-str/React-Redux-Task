import React from "react";

const PostComp = ({ posts }) => {
  return (
    <div
      className="border border-indigo-500 rounded p-2 bg-slate-50"
      key={posts.id}
    >
      <h3 className="text-xl font-semibold capitalize ">
        {posts.id}.{posts.title}
      </h3>
      <p>{posts.body}</p>
    </div>
  );
};

export default PostComp;
