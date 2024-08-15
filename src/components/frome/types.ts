import { Pepole, Filme, Planet } from "../../common/types/interface";

export type CategoryData = Pepole[] | Filme[] | Planet[];

export type CategoryKeys = {
  people: (keyof Pepole)[];
  films: (keyof Filme)[];
  planets: (keyof Planet)[];
};
export type DataItem = Pepole | Filme | Planet;
export interface TableProps {
  formdis: boolean;
  searchData: any;
  setFomedis: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchData: React.Dispatch<React.SetStateAction<CategoryData>>;
  categoryData: DataItem[]; // Array of union type
  category: "people" | "films" | "planets"; // String literal type for category
}
