import React from 'react'
import { renderProfil } from './proflrUtils'
import { Pepole, Filme, Planet } from "../../components/interface/interface";

type CategoryData = Pepole[] | Filme[] | Planet[];
type CategoryKeys = {
  people: (keyof Pepole)[];
  films: (keyof Filme)[];
  planets: (keyof Planet)[];
};

interface ProfileProps {
    propsInfo:[],
    category: "people" | "films" | "planets"; // String literal type for category
}
    const ProfileInfo:React.FC<ProfileProps>=({propsInfo,category})=> {

        const categoryKeys: CategoryKeys = {
            people: [
              "name",
              "height",
              "mass",
              "hair_color",
              "skin_color",
              "birth_year",
              "url",
            ],
            films: ["title", "director", "producer", "release_date","url"],
            planets: [
              "name",
              "rotation_period",
              "orbital_period",
              "diameter",
              "climate",
              "terrain",
              "gravity","url",
            ],
          };
        const renderProfile=()=>{
            return  propsInfo.map((item:any)=>(
                renderProfil(category,item,categoryKeys)
            ))
        }

  return (
    <div className="infro">
       <>
        {renderProfile()}
   
       </>
  </div>
  )
}

export default ProfileInfo