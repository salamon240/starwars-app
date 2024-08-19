import React, { useState } from "react";
import "./form.css";
import { Pepole, Filme, Planet } from "../../common/types/interface";
import { CategoryKeys, TableProps } from "./types";

const Formes: React.FC<TableProps> = ({
  category,
  formdis,
  searchData,
  setFomedis,
  setSearchData,
}) => {
  const [newData, setNewData] = useState<Record<string, string>>({});

  const categoryKeys: CategoryKeys = {
    people: ["name", "height", "mass", "hair_color", "skin_color", "birth_year"],
    films: ["title", "director", "producer", "release_date"],
    planets: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "terrain",
      "gravity",
    ],
  };
  const renderTableHeaders = () => {
    return categoryKeys[category].map((key) => (
      <div key={key} className="form-item">
        <label className="label" key={key}>
          {formatHeader(key)}
        </label>
        <input
          onChange={(e) => setNewData({ ...newData, [key]: e.target.value })}
          type="text"
          placeholder={formatHeader(key)}
        />
      </div>
    ));
  };

  const handelForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Array.isArray(searchData)) {
      setSearchData((prevSearchData) => [...prevSearchData, newData as any].reverse());
    } else {
      console.error("searchData should be an array");
    }

    setNewData({});
    setFomedis(!formdis);
  };
  // Function to format header text (optional, for display purposes)
  const formatHeader = (key: string) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleClose = () => {
    setFomedis(!formdis);
  };
  return (
    <div>
      <form className={formdis ? "frome activs" : "frome"} onSubmit={handelForm} action="">
        <div className="item">
          <span onClick={handleClose} className="closeForme">
            x
          </span>
          <h1>Create </h1>
          {renderTableHeaders()}
          <button className="formbtn" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formes;
