import React, { useEffect, useState } from "react";
import "./form.css";
import { TableProps } from "./types";
import { CATEGORIES_KEYS } from "../../common/consts";
import { formatHeader, generateUniqueId } from "../../common/utils";

const Formes: React.FC<TableProps> = ({
  category,
  formdis,
  searchData,
  setFomedis,
  setSearchData,
}) => {
  const [newData, setNewData] = useState<Record<string, string>>({});

  const renderTableHeaders = () => {
    return CATEGORIES_KEYS[category].map((key) =>
      React.createElement(
        "div",
        { key: key, className: "form-item" },
        React.createElement("label", { className: "label" }, formatHeader(key)),
        React.createElement("input", {
          onChange: (e) => handleChange(key, e.target.value),
          type: "text",
          placeholder: formatHeader(key),
          value: newData[key] || "",
        })
      )
      /*<div key={key} className="form-item">
        <label className="label" key={key}>
          {formatHeader(key)}
        </label>
        <input
          onChange={(e) => handleChange(key, e.target.value)}
          value={newData[key] || ""} // Bind input value to state
          type="text"
          placeholder={formatHeader(key)}
        />
      </div>*/
    );
  };

  const handleChange = (key: string, value: string) => {
    setNewData((prevData) => ({
      ...prevData,
      [key]: value,
      id: generateUniqueId(),
    }));
  };
  const handelForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Array.isArray(searchData)) {
      setSearchData((prevSearchData) =>
        [...prevSearchData, newData as any].reverse()
      );
      console.log(searchData, "form");
    } else {
      console.error("searchData should be an array");
    }

    setNewData({});
    setFomedis(!formdis);
  };
  // Function to format header text (optional, for display purposes)

  const handleClose = () => {
    setNewData({});
    setFomedis(!formdis);
  };

  return (
    <div>
      <form
        className={formdis ? "frome activs" : "frome"}
        onSubmit={handelForm}
        action=""
      >
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
