import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import RegionSelector from "./RegionSelector";
import CityList from "./CityList";
import regionsData from "@/lib/regions/regions.json";
import citiesData from "@/lib/cities/cities.json";

export interface City {
  id: number;
  name: string;
  population: number;
  regionId: number;
}

export interface Region {
  id: number;
  region: string;
}

const CityBreadcrumb: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<number | null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (selectedRegionId !== null) {
      const filteredCities = citiesData.filter(city => city.regionId === selectedRegionId);
      setCities(filteredCities);
    } else {
      setCities([]);
    }
  }, [selectedRegionId]);

  const handleSelectRegion = (regionId: number) => {
    setSelectedRegionId(regionId);
  };

  const handleShowButtonClick = () => {
    if (selectedRegionId !== null) {
      const region = regionsData.find(r => r.id === selectedRegionId);
      if (region) {
        router.push(`/regions/${region.region}`);
      }
    }
  };

  return (
    <div>
      Россия &gt;{" "}
      <RegionSelector
        regions={regionsData}
        onSelectRegion={(region) => handleSelectRegion(region.id)}
      />{" "}
      {selectedRegionId && (
        <>
          <button onClick={handleShowButtonClick} className="ml-2 p-1 bg-blue-500 text-white rounded">
            Показать
          </button>
          &gt; <CityList cities={cities} />
        </>
      )}
    </div>
  );
};

export default CityBreadcrumb;
