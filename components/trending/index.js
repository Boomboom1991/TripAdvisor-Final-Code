"use client";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import { places } from "@/lib/recentViewedPlacesData";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

import { labels } from "@/lib/labels";

export default function Trending() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            position: "relative",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "none",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          style: {
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          },
          children: (
            <ArrowCircleRightIcon className="text-[#f2f3f7] text-6xl" />
          ),
        }}
        backwardBtnProps={{
          style: {
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          },
          children: <ArrowCircleLeftIcon className="text-[#f2f3f7] text-6xl" />,
        }}
        speed={300}
      >
        {places.slice(0, 20).map((place, index) => (
          <Link href={`/places/${place.id}`} key={place.id}>
            <div className="m-4 shadow-xl hover:cursor-pointer rounded-xl hover:underline bg-white w-[300px] md:w-[300px]">
              <Image
                src={place.images[0]}
                className="w-full h-[300px] md:h-[300px] rounded-t-xl"
                width="300"
                height="300"
                alt={place.name || "Изображение"}
              />

              <div className="p-4">
                <div className="text-xl font-medium hover:underline transition duration-700 truncate">
                  {place.name || "Без названия"}
                </div>

                <div className="text-xl font-light hover:underline transition duration-700 truncate">
                  {place.region || "Россия"}, {place.city}
                </div>

                <div className="flex">
                  <Rating
                    name="text-feedback"
                    value={place?.rating || 0}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />

                  <Box
                    sx={{
                      ml: 1,
                      color: (place.rating || 0) > 2 ? "green" : "red",
                    }}
                  >
                    {labels[place?.rating || 0]}
                  </Box>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
