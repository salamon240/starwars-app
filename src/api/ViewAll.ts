import axios from "axios";

export const fetchAllViewResults = async (categories: string) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/${categories}`);

    return response.data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
