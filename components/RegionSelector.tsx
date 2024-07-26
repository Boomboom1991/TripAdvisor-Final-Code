import React from "react";
import { Region } from "./CityBreadcrumb";

interface RegionSelectorProps {
  regions: Region[];
  onSelectRegion: (region: Region) => void;
}

const RegionSelector: React.FC<RegionSelectorProps> = ({ regions, onSelectRegion }) => {
  return (
    <select onChange={(e) => onSelectRegion(regions.find(region => region.id === Number(e.target.value))!)}>
      {regions.map((region) => (
        <option key={region.id} value={region.id}>
          {region.region}
        </option>
      ))}
    </select>
  );
};

export default RegionSelector;
