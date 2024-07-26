"use client";

import React, { useState } from 'react';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";
import RadioGroupRating from "@/lib/rating";
import Carousel from "react-simply-carousel";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Link from "next/link";
import Image from "next/image";
import { places } from "@/lib/recentViewedPlacesData";
import { labels } from "@/lib/labels";

export default function Places() {
  const value = 3.5;
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="">
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
        speed={400}
      >
        {places.slice(21, 40).map((place, index) => (
          <Link href={`/places/${place.id}`} key={place.id}>
            <div className="m-4 shadow-xl hover:cursor-pointer rounded-xl hover:underline bg-white w-[300px] md:w-[300px]">
              <Image
                src={
                  place.images && place.images.length > 0
                    ? place.images[0]
                    : "/img/no_photo.jpg"
                }
                className="w-full h-[300px] rounded-t-2xl md:h-[300px]"
                width={300}
                height={300}
                alt={place.name || "Изображение"}
              />

              <div className="p-2">
                <div className="text-md md:text-xl font-medium hover:underline transition duration-700">
                  {place.name || ""}
                </div>

                <div className="text-md font-light hover:underline transition duration-700">
                  {place.city || ""}
                </div>

                <p className="p-1 rounded-full text-md font-semibold">
                  #{place.subcategory}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
