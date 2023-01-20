import { useEffect, useState } from "react";
import CategoryCollapse from "../../components/CategoryCollapse";
import { useGetAllCategoryQuery } from "../../store/services/categoryService";
import { CategoryQuery } from "../../types/query";
import { CategoryQueryToQueryParam } from "../../utils/DTOMapper";
import * as S from "./style";
import Card from "../../components/common/Card";

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
    <S.CategoryPageContainer>
      <Card>
        <CategoryCollapse
          category={getAllCategory?.data ? getAllCategory.data : undefined}
          handleCategoryClick={handleCategoryClick}
          marginLeft={2}
          choosenCategory={choosenCategory}
        />
      </Card>
    </S.CategoryPageContainer>
  );
};

export default Category;
