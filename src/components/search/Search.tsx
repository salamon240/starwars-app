import { useState, useEffect, FC } from "react";
import "./search.css";
import { fetchSearchResults } from "../../api/ServisApi";
import { CiSearch } from "react-icons/ci";
import { CATEGORIES } from "./consts";
import { SearchProps } from "./types";
import useSearch from "./useSearch";

const Search: FC<{ setSearchResults: (results: any[]) => void }> = ({ setSearchResults }) => {
  const {searchInput,setSearchInput}= useSearch(setSearchResults)

  return (
    <div className="heder">
      <div className="search">
        <input
          type="text"
          placeholder="Enter your search"
          className="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <CiSearch className="searchIcon" />
      </div>
    </div>
  );
};

export default Search;
