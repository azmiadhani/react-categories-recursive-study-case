import { Category } from "../../types/component";
import { CategoryQuery } from "../../types/query";

export const CategoryQueryToQueryParam = (query: CategoryQuery) => {
  let result = "";

  result += "level-depth=" + query.levelDepth;

  return result;
};
