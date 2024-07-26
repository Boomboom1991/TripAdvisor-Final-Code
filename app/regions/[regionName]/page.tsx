"use client";

import { useParams } from 'next/navigation';
import citiesData from "@/lib/cities/cities.json";
import regionsData from "@/lib/regions/regions.json";
import { City } from "@/components/CityBreadcrumb";

const RegionPage = () => {
  const params = useParams();
  const encodedRegionName = params.regionName as string;
  const regionName = decodeURIComponent(encodedRegionName);

  const region = regionsData.find(r => r.region === regionName);
  const cities = region ? citiesData.filter(city => city.regionId === region.id) : [];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{regionName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((city: City) => (
          <div key={city.id} className="p-4 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{city.name}</h2>
            <p>Население: {city.population}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionPage;
