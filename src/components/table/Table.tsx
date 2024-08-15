import React, { useEffect, useState } from "react";
import { Pepole, Filme, Planet } from "../../common/types/interface";
import { renderRowCells } from "./tableUtils"; // Adjust the path accordingly
import "./table.css";
import { formatHeader } from "../../common/utils";
import { CATEGORIES_KEYS } from "../../common/consts";


// TODO : Clean this file change the use of index in map
type CategoryData = Pepole[] | Filme[] | Planet[];
type CategoryKeys = {
  people: (keyof Pepole)[];
  films: (keyof Filme)[];
  planets: (keyof Planet)[];
};

type DataItem = Pepole | Filme | Planet;

interface TableProps {
  setSearchData: React.Dispatch<React.SetStateAction<CategoryData>>;

  formdis: boolean;
  searchData: DataItem[]; // Array of union type
  category: "people" | "films" | "planets"; // String literal type for category
}

const Table: React.FC<TableProps> = ({ searchData, category, formdis, setSearchData }) => {
  const [state, setState] = useState(false);
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
    setState(!state);

    delete searchData[index];
  };
  // Function to render table rows

  const renderTableRows = () => {
    return searchData.map((item, index) => (
      <tr key={index}>
        {renderRowCells(category, item, CATEGORIES_KEYS)}
        <td>
          <div className="btn">
            <button key={index} onClick={() => handleDelete(index)} className="tablebtn">
              Delete
            </button>
            <button className="tablebtn">Edit</button>
          </div>
        </td>
      </tr>
    ));
  };
  // Function to render table headers based on the category

  return (
    <div className={!formdis ? "wrapper" : "wrapper tatactiv"}>
      <div className="capton">{category.charAt(0).toUpperCase() + category.slice(1)}</div>

      <table>
        <thead className="heade">
          <tr>{renderTableHeaders()}</tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
