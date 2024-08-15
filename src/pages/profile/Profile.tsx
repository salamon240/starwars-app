import React, { useEffect, useState } from 'react'
import './profile.css'
import profileImages from './../../images/StarWarsLogo.jpeg'
import { useLocation } from 'react-router-dom';
import { FetchFilmeProfile, FetchPeopleProfile, FetchPlanetsProfile } from '../../api/profileapi';
import { Filme, Pepole, Planet } from '../../components/interface/interface';
import ProfileInfo from '../../components/profileInfo/ProfileInfo';
type CategoryData = Pepole[] | Filme[] | Planet[];
function Profile() {
  const location = useLocation();
  const categoris = location.state.data.toLowerCase();
  const [dataProfil,setDataProfil]=useState<any>([])
  const [imageUrl,setImageUrl]=useState<string>()
  useEffect(() => {
    const getProfile=async()=>{
      try {
        let data: CategoryData = [];
        if (categoris === "people") {
          const name = location.state.name.name.toLowerCase();
          console.log("pepole",name)
          data = await FetchPeopleProfile(categoris,name);
          console.log("p",data,location.state.url )
          data.forEach(element => {
            const url=element.url
            const number = url.replace(/[^\d]/g, ''); // Remove non-digits and parse as integer
            let src:string=`https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/main/static/assets/img/people/${number}.jpg`
            console.log("dataurl",src)
            setImageUrl(src)
        
          });

        } else if (categoris === "films") {
          const name = location.state.name.title.toLowerCase();
          data = await FetchFilmeProfile(categoris,name);
          console.log("filme",name)
          console.log("f",data,name)
          setImageUrl(profileImages)
          console.log(imageUrl)
        } else if (categoris === "planets") {
          const name = location.state.name.name.toLowerCase();

          data = await FetchPlanetsProfile(categoris,name);
          console.log("plant",name)
          console.log("a",data,)
           setImageUrl('../../images/cade-roberts-EpIUbeFrqwQ-unsplash.jpg')

        }
      
        data.map((item:any)=>(
          console.log("soli",item.url)
       
         ))
        setDataProfil(data)
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    };
    getProfile()
   
  }, []);

  return (
    <div className='Profile'>
      
    <div className="mainProfile">
      <h1 className="proH1">{categoris}</h1>
      <div className="imgeProfil">
        <img className='imagpro' src={imageUrl} alt=""  />
      </div>
    <ProfileInfo propsInfo={dataProfil} category={categoris}/>
    </div>
    </div>
  )
}

export default Profile


