import React, { useState } from "react";
import "./searchPage.css";
import video from "../../images/73654-549527823_medium.mp4"
import titelImage from './../../images/pngwing.com (5).png'
import Search from "../../components/search/Search";
import SearchList from "../../components/searchList/SearchList";
 
function SearchPage() {
  const [searchResults, setSearchResults] = useState<{ category: string; results: any[] }[]>([]);

  return (
    <div className="SearchPage">
      <video
        className="video"
        autoPlay
        loop
        muted
        src={video}
      ></video>
      <div className="main">
        
          <img src={titelImage} alt="titel logo" />
          <div className="serchMain">
          
          <h2>Search for your favorite characters and places from the Star Wars film series</h2>
            <Search  setSearchResults={setSearchResults}/>
          
            <SearchList searchProps={searchResults}/>
          </div>
      </div>
    </div>
  );
}

export default SearchPage;
