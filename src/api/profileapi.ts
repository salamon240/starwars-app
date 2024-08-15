import { Filme, Pepole, Planet } from "../common/types/interface";
import { fetchSearchProfile } from "./ServisApi";

export const FetchPeopleProfile = async (categoris: string, name: string) => {
  console.log("this is api", name, categoris);

  try {
    const results = await fetchSearchProfile(categoris, name);
    const formattedData = results.map((item: Pepole) => ({
      name: item.name,
      height: item.height,
      mass: item.mass,
      hair_color: item.hair_color,
      skin_color: item.skin_color,
      birth_year: item.birth_year,
      url: item.url,
    }));
    return formattedData;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

export const FetchFilmeProfile = async (categoris: string, name: string) => {
  try {
    const results = await fetchSearchProfile(categoris, name);
    const formattedData = results.map((item: Filme) => ({
      title: item.title,
      director: item.director,
      producer: item.producer, // Include other optional fields if needed
      release_date: item.release_date,
      url: item.url,
    }));
    return formattedData;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

export const FetchPlanetsProfile = async (categoris: string, name: string) => {
  try {
    const results = await fetchSearchProfile(categoris, name);
    console.log("nma", results);
    const formattedData = results.map((item: Planet) => ({
      name: item.name,
      rotation_period: item.rotation_period,
      diameter: item.diameter,
      orbital_period: item.orbital_period, // Include other optional fields if needed
      climate: item.climate,
      gravity: item.gravity,
      terrain: item.terrain,
      url: item.url,
    }));
    console.log("solidata", formattedData);
    return formattedData;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};
