import React, { useEffect } from "react";
import { useGetAllCategoryQuery } from "../../store/services/categoryService";
import { CategoryQueryToQueryParam } from "../../utils/DTOMapper";
import { CategoryQuery } from "../../types/query";

const Category = () => {
  const { data: getAllCategory, isLoading: getAllCategoryIsLoading } =
    useGetAllCategoryQuery(
      CategoryQueryToQueryParam({ levelDepth: 999 } as CategoryQuery)
    );
  useEffect(() => {
    console.log(getAllCategory);
  }, [getAllCategory]);

  return <div className="bg-black">TEST</div>;
};

export default Category;
