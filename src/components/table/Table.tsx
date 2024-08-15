import React, { useEffect, useState } from "react";
import { Pepole, Filme, Planet } from "../../components/interface/interface";
import { renderRowCells } from "./tableUtils"; // Adjust the path accordingly
import "./table.css";
import { formatHeader } from "../actionFunc/tableFunc";
import { Link } from "react-router-dom";
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

const Table: React.FC<TableProps> = ({
  searchData,
  category,
  formdis,
  setSearchData,
}) => {
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

  useEffect(() => {
    if (state) {
      renderTableHeaders();
      renderTableRows();
    }
  }, [state]);

  const renderTableHeaders = () => {
    return categoryKeys[category].map((key) => (
      <th key={key}>{formatHeader(key)}</th>
    ));
  };


  const handleDelete = (index: number) => {
    setState(!state);
    searchData.forEach((element:any,Index:any) => {
      if(Index==index){
        
        const news= searchData.splice(index,1)
        console.log(searchData.length,"for element")
      }
    });
  
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


        {searchData.length!==0?


      <table>
        <thead className="heade">
          <tr>{renderTableHeaders()}</tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>:<><h1 className="h1Delete">you dont have any data</h1><Link className="deletLink" to={"/"} >back to searh page</Link></>
}
    </div>
  );
};

export default Table;
