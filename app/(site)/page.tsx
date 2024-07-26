"use client";
import SearchBox from "@/components/search/searchbox";
import Search from "@/components/search/search";
import RecentViewed from "@/components/RecentViewed/RecentViewed";
import Trending from "@/components/trending";
import regionsData from "@/lib/regions/regions.json";
import citiesData from "@/lib/cities/cities.json";

import { places } from "@/lib/recentViewedPlacesData";
import Category from "@/components/category";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const CityBreadcrumb = dynamic(() => import("@/components/CityBreadcrumb"), {
  ssr: false,
});

interface City {
  id: number;
  name: string;
  population: number;
}

interface Region {
  id: number;
  region: string;
}

export default function Home() {
  const [type, setType] = useState<string>("all");
  const [results, setResults] = useState<any>(places);
  const [selectedRegion, setSelectedRegion] = useState<string>(
    regionsData[0].region
  );
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    if (selectedRegion === "Тверская область") {
      setCities(citiesData);
    } else {
      setCities([]);
    }
  }, [selectedRegion]);

  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region);
    setSelectedCity("");
  };

  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <main className="">
      <div className="hidden md:block font-bold text-4xl text-center mt-5 mb-5">
        Куда Вы едете?
      </div>

      <Search results={results} setResults={setResults} places={places} />

      <div className="max-w-7xl flex-col rounded-2xl mx-auto block md:flex bg-[] p-1 space-x-1 my-10">
        <span className="font-bold text-xl">Выберите регион и город</span>
        <CityBreadcrumb />
      </div>

      <div className="max-w-7xl rounded-2xl mx-auto block md:flex bg-[#f2b203] p-1 space-x-1 my-10">
        <div className="relative w-full h-[600px]">
          <Image
            src="/mainSlider/1.jpg"
            width="1366"
            height="600"
            alt={""}
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-5">
            <p className="text-3xl font-bold text-white mb-5">
              Узнайте, какие развлечения — победители этого года выбрали Вы.
            </p>
            <p className="text-lg font-light text-white">
              Награда Travellers Choice: лучшее из лучшего — 2024 в категории
              развлечений Узнайте, какие развлечения — победители этого года
              выбрали Вы.
              <br />
              <button className="btn mt-3">Посмотреть список</button>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#faf1ed] my-5">
        <div className="mx-auto max-w-7xl p-2">
          <div className="m-3">
            <div className="text-3xl font-bold">Вы недавно смотрели</div>
          </div>
          <RecentViewed />
        </div>
      </div>

      <div className="my-5">
        <div className="mx-auto max-w-7xl p-2">
          <div className="m-3">
            <div className="text-3xl font-bold">Популярные места</div>
          </div>
          <Trending />
        </div>
      </div>
    </main>
  );
}
