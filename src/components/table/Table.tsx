import React, { useEffect, useState } from "react";
import { Pepole, Filme, Planet } from "../../components/interface/interface";
import { renderRowCells } from "./tableUtils"; // Adjust the path accordingly
import "./table.css";
import { formatHeader } from "../actionFunc/tableFunc";
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

const Table: React.FC<TableProps> = ({ searchData, category,formdis,setSearchData}) => {
  const [state, setState] = useState(false);
  const categoryKeys: CategoryKeys = {
    people: [
      "name",
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "birth_year",
    ],
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
  const arr: any[] = [];    

useEffect(()=>{
  console.log( "render")

  if(state){

    renderTableHeaders()
    renderTableRows()
    console.log( "render")
  }


},[state])

  const renderTableHeaders = () => {
    return categoryKeys[category].map((key) => (
      <th key={key}>{formatHeader(key)}</th>
    ));
  };

  const handleDelete = (index: number) => {
       setState(!state)

       delete searchData[index]
  
  };
  // Function to render table rows

  const renderTableRows = () => {
    return searchData.map((item, index) => (
      <tr key={index}>
        {renderRowCells(category, item, categoryKeys)}
        <td>
          <div className="btn">
            <button
              key={index}
              onClick={() => handleDelete(index)}
              className="tablebtn"
            >
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
      <div className="capton">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </div>

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
