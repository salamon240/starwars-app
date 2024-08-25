import { CategoryData, DataItem } from "../../common/types/mainTyps";


export interface TableProps {
  formdis: boolean;
  searchData: any;
  setFomedis: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchData: React.Dispatch<React.SetStateAction<CategoryData>>;
  categoryData: DataItem[]; // Array of union type
  category: "people" | "films" | "planets"; // String literal type for category
}
