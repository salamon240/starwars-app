import React, { useState,useEffect  } from 'react'
import './search.css'
import { fetchSearchResults } from '../../api/ServisApi';
import { CiSearch } from "react-icons/ci";

interface SearchProps {
  setSearchResults: React.Dispatch<React.SetStateAction<{ category: string; results: any[] }[]>>;
}

const Search:React.FC<SearchProps>= ({setSearchResults})=> {
  const [searchInput, setSearchInput] = useState<string>('');

  const categories = [
    { label: 'People', value: 'people' },
    { label: 'Films', value: 'films' },
    { label: 'Planets', value: 'planets' },
  ];
  useEffect(() => {
    if (searchInput.trim() === '') {
      setSearchResults([]);
      return;
    }

    const fetchResults = async () => {
      try {
        const results = await fetchSearchResults(searchInput, categories);
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchResults();
  }, [searchInput]);
  return (
    <div className='heder'>
      <div className="search">
        <input type="text" placeholder='Enter your search'  className='searchInput' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
        <CiSearch className='searchIcon' />

      </div>
    </div>
  )
}

export default Search