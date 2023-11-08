import { useState } from "react";
import GlassesList from "./GlassesList";
import GlassesModel from "./GlassesModel";
import Header from "./Header";
import data from "./data.json";

export default function Glasses() {
  const [glass, setGlass] = useState("");
  const handleSelectGlass = (glass) => {
    setGlass(glass);
  };
  return (
    <div>
      <Header />
      <GlassesModel glass={glass} />
      <GlassesList onSelect={handleSelectGlass} glasses={data} />
    </div>
  );
}
