import React from "react";
// TODO : Clean this file
import { Pepole, Filme, Planet } from "../../common/types/interface";

type CategoryKeys = {
  people: (keyof Pepole)[];
  films: (keyof Filme)[];
  planets: (keyof Planet)[];
};

type DataItem = Pepole | Filme | Planet;

export const renderProfil = (
  category: "people" | "films" | "planets",
  data: DataItem,
  categoryKeys: CategoryKeys
) => {
  switch (category) {
    case "people":
      return renderCard(categoryKeys.people, data as Pepole);
    case "films":
      return renderCard(categoryKeys.films, data as Filme);
    case "planets":
      return renderCard(categoryKeys.planets, data as Planet);
    default:
      return null;
  }
};
const renderCard = (
  keys: (keyof Pepole | keyof Filme | keyof Planet)[],
  item: Pepole | Filme | Planet
) => {
  return keys.map((key) => {
    const cellValue = (item as any)[key];
    const newString = key.split("_").join(" ");

    return React.createElement("p", { key, "data-cell": key }, `${newString} : ${cellValue}`);
  });
};
