"use client";

import { useEffect, useState } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

export default function Gallary({ data }) {
  const images = data.images.map((image) => {
    return { src: image, aspect_ratio: 16 / 9, name: 1 };
  });

  return (
    <div>
      {data.images.length === 0 ? null : (
        <Carousel
          images={data.images.map((number) => ({
            src: `${number}`,
          }))}
          isLoop={true}
          isAutoPlaying={true}
          transitionSpeed="1"
          style={{ height: 450, width: 750 }}
        />
      )}
    </div>
  );
}
