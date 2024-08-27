import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FetchFilme, FetchPeople, FetchPlanets } from "../../api/categorisApi";
import Formes from "../../components/frome/Formes";
import "./categories.css";
import Loding from "../../components/loding/Loding";
import Table from "../../components/table/Table";
import { CategoryData } from "../../common/types/mainTyps";
import { useToggle } from "../../common/toggole";
import useCategories from "./useCategories";

// TODO : Clean this file + create custom hook + please look at the loading states
function Categories() {
  const {
    categories,
    searchData,
    loading,
    fomedis,
    setFomedis,
    setSearchData,
  } = useCategories();

  return (
    <div className="catagories">
      {loading ? (
        <Loding />
      ) : (
        <div className="main_cat">
          {fomedis ? (
            <button
              className="createBtn btnactiv"
              onClick={() => setFomedis()}
            >
              X
            </button>
          ) : (
            <button className="createBtn" onClick={() => setFomedis()}>
              Create new data
            </button>
          )}

          <Formes
            categoryData={[]}
            category={categories}
            formdis={fomedis}
            setSearchData={setSearchData}
            searchData={searchData}
            setFomedis={setFomedis}
          />

          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <Table
            loading={loading}
              searchData={searchData}
              setSearchData={setSearchData}
              category={categories}
              formdis={fomedis}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Categories;
