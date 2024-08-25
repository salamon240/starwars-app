import axios from "axios";
import { fetchAllViewResults } from "./ViewAll";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { it } from "node:test";
import { Filme, Pepole, Planet } from "../common/types/interface";
import { generateUniqueId } from "../common/utils";

export const FetchPeople = async (categoris: string) => {
  try {
    const results = await fetchAllViewResults(categoris);
    const formattedData = results.map((item: Pepole) => ({
      name: item.name,
      height: item.height,
      mass: item.mass,
      hair_color: item.hair_color,
      skin_color: item.skin_color,
      birth_year: item.birth_year,
      id:generateUniqueId()

    }));
    console.log(formattedData)
    return formattedData;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

export const FetchFilme = async (categoris: string) => {
  try {
    const results = await fetchAllViewResults(categoris);
    const formattedData = results.map((item: Filme) => ({
      title: item.title,
      director: item.director,
      producer: item.producer, // Include other optional fields if needed
      release_date: item.release_date,
      id:generateUniqueId()

    }));
    return formattedData;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

export const FetchPlanets = async (categoris: string) => {
  try {
    const results = await fetchAllViewResults(categoris);
    const formattedData = results.map((item: Planet) => ({
      name: item.name,
      rotation_period: item.rotation_period,
      diameter: item.diameter,
      orbital_period: item.orbital_period, // Include other optional fields if needed
      climate: item.climate,
      gravity: item.gravity,
      terrain: item.terrain,
      id:generateUniqueId()

    }));
    console.log("solidata", formattedData);
    return formattedData;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};
