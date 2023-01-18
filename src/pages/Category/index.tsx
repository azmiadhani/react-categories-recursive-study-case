import { useEffect, useState } from "react";
import CategoryCollapse from "../../components/CategoryCollapse";
import { useGetAllCategoryQuery } from "../../store/services/categoryService";
import { CategoryQuery } from "../../types/query";
import { CategoryQueryToQueryParam } from "../../utils/DTOMapper";

const Category = () => {
  const { data: getAllCategory, isLoading: getAllCategoryIsLoading } =
    useGetAllCategoryQuery(
      CategoryQueryToQueryParam({ levelDepth: 999 } as CategoryQuery)
    );

  const [choosenCategory, setChoosenCategory] = useState(0);

  const handleCategoryClick = (id: number) => {
    setChoosenCategory(id);
  };

  useEffect(() => {
    console.log(getAllCategory);
  }, [getAllCategory]);

  return (
    <div className="h-fit w-full flex items-center justify-center">
      <div className="bg-primary-content w-96 h-full shadow-lg rounded-lg p-2">
        <CategoryCollapse
          category={getAllCategory?.data ? getAllCategory.data : undefined}
          handleCategoryClick={handleCategoryClick}
          marginLeft={2}
          choosenCategory={choosenCategory}
          // childOnly={true}
        />
      </div>
    </div>
  );
};

export default Category;
