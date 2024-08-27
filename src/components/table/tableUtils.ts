import React from "react";
import { Pepole, Filme, Planet } from "../../common/types/interface";
import {
  CategoryData,
  CategoryKeys,
  DataItem,
} from "../../common/types/mainTyps";

export interface TableProps {
  setSearchData: React.Dispatch<React.SetStateAction<CategoryData>>;
  formdis: boolean;
  loading: boolean;
  searchData: DataItem[];
  category: "people" | "films" | "planets";
}

export const renderRowCells = (
  category: "people" | "films" | "planets",
  item: DataItem,
  categoryKeys: CategoryKeys
) => {
  switch (category) {
    case "people":
      return renderCells(categoryKeys.people, item as Pepole);
    case "films":
      return renderCells(categoryKeys.films, item as Filme);
    case "planets":
      return renderCells(categoryKeys.planets, item as Planet);
    default:
      return null;
  }
};

const renderCells = (
  keys: (keyof Pepole | keyof Filme | keyof Planet)[],
  item: DataItem
) => {
  return keys.map((key) => {
    const cellValue = (item as any)[key];
    return React.createElement("td", { key, "data-cell": key }, cellValue);
  });
};
