import React from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifts(category);
 
  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading...</p>}

      <div>
        <ol className="container">
          {images.map(img => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};
