
import React, { useEffect, useState } from 'react'
import { CATEGORIES } from './consts';
import { fetchSearchResults } from '../../api/ServisApi';

function useSearch(setSearchResults: (results: any[]) => void) {
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
  return {searchInput,setSearchInput}
}

export default useSearch