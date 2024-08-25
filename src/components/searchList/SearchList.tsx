import React from "react";
import "./searchList.css";
import { Link } from "react-router-dom";
import { SearchProps } from "./searchUtils";

// TODO: Clean this file + add some styling to the ul and li

const SearchList: React.FC<SearchProps> = ({ searchProps }) => {
  return (
    <div className="searchList">
      <div className="container">
        
      {searchProps.map((searchItem, index) => (
        <div key={index} className="category">
          <h2>{searchItem.category}</h2>
          <ul>
            {searchItem.results.slice(0, 3).map((item, i) => (
              <li key={i}>
                <Link
                  className="listLink"
                  key={i}
                  state={{ name: item, data: searchItem.category }}
                  to={"/profile"}
                >
                  {item.name || item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="listBtn"
            state={{ data: searchItem.category }}
            to={"/categories"}
          >
            view all
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SearchList;
