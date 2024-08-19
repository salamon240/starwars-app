import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FetchFilme, FetchPeople, FetchPlanets } from "../../api/categorisApi";
import Formes from "../../components/frome/Formes";
import "./categories.css";
import titelImage from "../../images/josue-as-_nprTIIwSk4-unsplash.jpg";
import Loding from "../../components/loding/Loding";
import { Pepole, Filme, Planet } from "../../common/types/interface";
import Table from "../../components/table/Table";

type CategoryData = Pepole[] | Filme[] | Planet[];

// TODO : Clean this file + create custom hook + please look at the loading states
function Categories() {
  const location = useLocation();
  const categoris = location.state.data.toLowerCase();
  const [searchData, setSearchData] = useState<CategoryData>([]);
  const [isLoading, setIsLoading] = useState(true);
  const keySet = new Set<string>();
  const [fomedis, setFomedis] = useState(false);
  const [loadin, setLoadin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data: CategoryData = [];

        if (categoris === "people") {
          data = await FetchPeople(categoris);
        } else if (categoris === "films") {
          data = await FetchFilme(categoris);
        } else if (categoris === "planets") {
          data = await FetchPlanets(categoris);
        }

        data.forEach((item) => {
          // Get keys of the current object and add them to the set
          Object.keys(item).forEach((key) => {
            keySet.add(key);
          });
        });

        setSearchData(data);
        setIsLoading(false);

        // Mocking a delay to simulate loading
        setTimeout(() => {
          setLoadin(true);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set isLoading to false in case of error
      }
    };

    fetchData();
  }, [categoris]);

  return (
    <div className="categoreis">
      <img className="containerImag" src={titelImage} alt="" />
      {!loadin ? (
        <Loding />
      ) : (
        <div className="main_cat">
          {fomedis ? (
            <button className="createBtn btnactiv" onClick={() => setFomedis(!fomedis)}>
              X
            </button>
          ) : (
            <button className="createBtn" onClick={() => setFomedis(!fomedis)}>
              Create new data
            </button>
          )}

          <Formes
            categoryData={[]}
            category={categoris}
            formdis={fomedis}
            setSearchData={setSearchData}
            searchData={searchData}
            setFomedis={setFomedis}
          />

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <Table
              searchData={searchData}
              setSearchData={setSearchData}
              category={categoris}
              formdis={fomedis}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Categories;
