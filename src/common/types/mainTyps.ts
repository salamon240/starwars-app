import { Filme, Pepole, Planet } from "./interface";



export type DataItem = Pepole | Filme | Planet;
export type CategoryData = Pepole[] | Filme[] | Planet[];

export type CategoryKeys = {
  people: (keyof Pepole)[];
  films: (keyof Filme)[];
  planets: (keyof Planet)[];
  
};
