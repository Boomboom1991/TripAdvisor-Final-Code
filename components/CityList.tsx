import React from "react";
import { City } from "./CityBreadcrumb";

interface CityListProps {
  cities: City[];
  onSelectCity?: (city: string) => void; // Optional if not used
}

const CityList: React.FC<CityListProps> = ({ cities, onSelectCity }) => {
  return (
    <select onChange={(e) => onSelectCity && onSelectCity(e.target.value)}>
      {cities.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default CityList;
