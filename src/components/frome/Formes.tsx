import React, { useState } from 'react'
import './form.css'
import { Pepole, Filme, Planet } from "../interface/interface";
type CategoryData = Pepole[] | Filme[] | Planet[] ;

type CategoryKeys = {
    people: (keyof Pepole)[];
    films: (keyof Filme)[];
    planets: (keyof Planet)[];
  };
  type DataItem = Pepole | Filme | Planet;
  interface TableProps {
    formdis: boolean
    searchData:any
    setFomedis: React.Dispatch<React.SetStateAction<boolean>>
    setSearchData: React.Dispatch<React.SetStateAction<CategoryData>>;
    categoryData: DataItem[]; // Array of union type
    category: 'people' | 'films' | 'planets'; // String literal type for category
  }

const Formes: React.FC<TableProps>=({category ,formdis, searchData,setFomedis,setSearchData})=> {
  const [newData, setNewData] = useState<Record<string, string>>({});

    const categoryKeys: CategoryKeys = {
        people: ['name', 'height', 'mass', 'hair_color', 'skin_color', 'birth_year'],
        films: ['title', 'director', 'producer', 'release_date'],
        planets: ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'terrain', 'gravity']
      };
      const renderTableHeaders = () => {

        return categoryKeys[category].map(key => (
          
            <div  key={key}className="form-item">
            <label className='label' key={key}>{formatHeader(key)}</label>
            <input  onChange={(e) => setNewData({ ...newData, [key]: e.target.value })} type="text"  placeholder={formatHeader(key)}/>
            </div>
          
        ));
      };

      const hndelForm=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (Array.isArray(searchData)) {
          setSearchData(prevSearchData => [...prevSearchData, newData as any].reverse());
        } else {
          console.error("searchData should be an array");
        }
    
    
        setNewData({});
        setFomedis(!formdis)
  
      }
        // Function to format header text (optional, for display purposes)
  const formatHeader = (key: string) => {
    return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div>
        <form  className={formdis? "frome activs":"frome"} onSubmit={(e)=>hndelForm(e)} action=''>
          
          <div className="item">
          <span  onClick={()=>setFomedis(!formdis)} className='closeForme'>x</span>
          <h1>Create  </h1>
         {renderTableHeaders()}
            <button  className='formbtn' type='submit'> Create</button>
          </div>
        
        </form>
    </div>
  )
}

export default Formes