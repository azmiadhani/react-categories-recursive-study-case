import React, { useEffect } from "react";
import { useGetAllCategoryQuery } from "../../store/services/categoryService";

const Category = () => {
  const { data: getAllCategory, isLoading: getAllCategoryIsLoading } =
    useGetAllCategoryQuery("");
  useEffect(() => {
    console.log(getAllCategory);
  }, [getAllCategory]);

  return <div className="bg-black">TEST</div>;
};

export default Category;
