import React, { useEffect, useState } from "react";
import { Pepole, Filme, Planet } from "../../common/types/interface";
import { renderRowCells } from "./tableUtils"; // Adjust the path accordingly
import "./table.css";
import { CATEGORIES_KEYS } from "../../common/consts";
import { Link } from "react-router-dom";
import { CategoryData } from "../frome/types";
import { formatHeader } from "../../common/utils";

type CategoryKeys = {
  people: (keyof Pepole)[];
  films: (keyof Filme)[];
  planets: (keyof Planet)[];
};

type DataItem = Pepole | Filme | Planet;

interface TableProps {
  setSearchData: React.Dispatch<React.SetStateAction<CategoryData>>;
  formdis: boolean;
  searchData: DataItem[];
  category: "people" | "films" | "planets";
}

const Table: React.FC<TableProps> = ({ searchData, category, formdis, setSearchData }) => {
const Table: React.FC<TableProps> = ({
  searchData,
  category,
  formdis,
  setSearchData,
}) => {
  const [state, setState] = useState(false);

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

  useEffect(() => {
    if (state) {
      renderTableHeaders();
      renderTableRows();
    }
  }, [state]);

  const renderTableHeaders = () => {
    return CATEGORIES_KEYS[category].map((key) => <th key={key}>{formatHeader(key)}</th>);
  };


  const handleDelete = (index: number) => {
    const updatedData = searchData.filter((_, i) => i !== index);
    setSearchData(updatedData as any);
    setState(!state); // Toggle state to trigger re-render if needed
  };

  const renderTableRows = () => {
    return searchData.map((item, index) => (
      <tr key={index}>
        {renderRowCells(category, item, CATEGORIES_KEYS)}
        <td>
          <div className="btn">
            <button onClick={() => handleDelete(index)} className="tablebtn">
              Delete
            </button>
            <button className="tablebtn">Edit</button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className={!formdis ? "wrapper" : "wrapper tatactiv"}>
      <div className="capton">{category.charAt(0).toUpperCase() + category.slice(1)}</div>

      {searchData.length !== 0 ? (
        <table>
          <thead className="heade">
            <tr>{renderTableHeaders()}</tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      ) : (
        <>
          <h1 className="h1Delete">You don't have any data</h1>
          <Link className="deletLink" to={"/"}>
            Back to search page
          </Link>
        </>
      )}
    </div>
  );
};

export default Table;
