import { useState, useEffect, FC } from "react";
import "./search.css";
import { fetchSearchResults } from "../../api/ServisApi";
import { CiSearch } from "react-icons/ci";
import { CATEGORIES } from "./consts";
import { SearchProps } from "./types";

const Search: FC<SearchProps> = ({ setSearchResults }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput.trim() === "") {
      setSearchResults([]);
      return;
    }
    const fetchResults = async () => {
      try {
        const results = await fetchSearchResults(searchInput, CATEGORIES);
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchResults();
  }, [searchInput]);
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
