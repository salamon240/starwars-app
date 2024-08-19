import axios from "axios";

export const fetchSearchResults = async (
  searchTerm: string,
  categories: { label: string; value: string }[]
) => {
  try {
    const requests = categories.map(async (category) => {
      const response = await axios.get(
        `https://swapi.dev/api/${category.value}/?search=${searchTerm}`
      );
      return { category: category.label, results: response.data.results.slice(0, 3) };
    });
    const results = await Promise.all(requests);
    return results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
export const fetchSearchProfile = async (categories: string, name: string) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/${categories}/?search=${name}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
