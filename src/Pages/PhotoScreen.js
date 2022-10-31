import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listPhotos } from "../redux/actions/photosAction";
import Navbar from "../components/Navbar";
import PhotoComp from "../components/PhotoComp";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { TabTitle } from "../utils/FunctionTitle";

const PhotoScreen = () => {
  TabTitle("Home | Photos");
  const dispatch = useDispatch();
  const photosData = useSelector((state) => state.photos);
  const { loading, error, photos } = photosData;

  useEffect(() => {
    dispatch(listPhotos());
  }, [dispatch]);
  // console.log(photosData);
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
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-4">
              {photos.map((photos, index) => {
                return <PhotoComp photos={photos} key={index} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PhotoScreen;
