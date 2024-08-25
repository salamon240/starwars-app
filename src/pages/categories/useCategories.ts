import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FetchFilme, FetchPeople, FetchPlanets } from "../../api/categorisApi";
import { CategoryData } from "../../common/types/mainTyps";
import { useToggle } from "../../common/toggole";

function useCategories() {
  const location = useLocation();
  const categories = location.state?.data.toLowerCase() || "";
  
  const [searchData, setSearchData] = useState<CategoryData>([]||null);
  const [loading, setLoading] = useToggle();
  const [fomedis, setFomedis] = useToggle();
  
  useEffect(() => {
    setLoading();
    const fetchData = async () => {
      console.log(searchData)
      try {
        let data: CategoryData = [];
        if (categories === "people") {
          data = await FetchPeople(categories);
        } else if (categories === "films") {
          data = await FetchFilme(categories);
        } else if (categories === "planets") {
          data = await FetchPlanets(categories);
        }
        setSearchData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading();
      }
    };
    
    fetchData();
  }, [categories]);

  return { categories,searchData, loading, fomedis, setFomedis, setSearchData };
}

export default useCategories;