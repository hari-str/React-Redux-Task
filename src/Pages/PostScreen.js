import React, { useEffect } from "react";
import { listPost } from "../redux/actions/postAction";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import PostComp from "../components/PostComp";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const PostScreen = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.posts);
  const { loading, error, post } = postData;

  // console.log(postData);
  useEffect(() => {
    dispatch(listPost());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <section className="py-28">
        <div className="container mx-auto">
          {loading ? (
            <Loading />
          ) : error ? (
            <ErrorMessage error={error} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2  md:grid-cols-4 gap-4">
              {post.map((posts, index) => {
                return (
                  <PostComp posts={posts} key={index} />
                  // <div
                  //   className="border border-indigo-500 rounded p-2 bg-slate-50"
                  //   key={item.id}
                  // >
                  //   <h3 className="text-xl font-semibold capitalize ">
                  //     {item.id}.{item.title}
                  //   </h3>
                  //   <p>{item.body}</p>
                  // </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PostScreen;
