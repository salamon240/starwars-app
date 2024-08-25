import React, { useEffect, useState } from "react";
import { renderRowCells, TableProps } from "./tableUtils"; // Adjust the path accordingly
import "./table.css";
import { CATEGORIES_KEYS } from "../../common/consts";
import { Link } from "react-router-dom";
import { formatHeader } from "../../common/utils";
import { useToggle } from "../../common/toggole";
import Loding from "../loding/Loding";

const Table: React.FC<TableProps> = ({
  searchData,
  category,
  formdis,
  setSearchData,
  loading,
}) => {
  const [isToggled, toggle] = useToggle();

 

  useEffect(() => {
    if (isToggled) {
      renderTableHeaders();
      renderTableRows();
    }
  }, [isToggled]);

  if (!Array.isArray(searchData)) {
    return <p>Error: Invalid data format</p>; }

  const renderTableHeaders = () => {
    return CATEGORIES_KEYS[category].map((key) => (
      <th key={key}>{formatHeader(key)}</th>
    ));
  };

  const handleDelete = (index: number) => {
    const updatedData = searchData.filter(
      (searchData) => searchData.id !== index
    );
   
    // Please fix this type
    setSearchData(updatedData as any);
    toggle(); // Toggle state to trigger re-render if needed
  };

  const renderTableRows = () => {
    return searchData.map((item) => (
      <tr key={item.id}>
        {renderRowCells(category, item, CATEGORIES_KEYS)}
        <td>
          <div className="btn">
            <button onClick={() => handleDelete(item.id)} className="tablebtn">
              Delete
            </button>
            <button className="tablebtn">Edit</button>
          </div>
        </td>
      </tr>
    ));
  };
  console.log(searchData)
  return (
    <div className={!formdis ? "wrapper" : "wrapper tatactiv"}>
      <div className="capton">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </div>

      {searchData.length >= 1 && !loading? (
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
