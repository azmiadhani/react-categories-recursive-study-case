import { useEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Category } from "../../types/component";
import cn from "../../utils/classNames";
import * as S from "./style";

type CategoryCollapseProps = {
  category: Category[] | undefined;
  handleCategoryClick: (id: number, name: string) => void;
  childOnly?: boolean;
  choosenCategory?: number;
};

const CategoryCollapse = ({
  category,
  handleCategoryClick,
  childOnly,
  choosenCategory,
}: CategoryCollapseProps) => {
  const [subCategoryCollapse, setSubCategoryCollapse] = useState<boolean[]>([]);

  const handleCollapseClick = (
    index: number,
    collapse: boolean = !subCategoryCollapse[index]
  ) => {
    const newCollapse = subCategoryCollapse.map((value, i) => {
      if (i === index) {
        return collapse;
      } else {
        return value;
      }
    });
    setSubCategoryCollapse(newCollapse);
  };

  useEffect(() => {
    const data: boolean[] = [];
    category?.map((category) => {
      if (category?.category) {
        category?.category.map(() => data.push(false));
      }
    });
    setSubCategoryCollapse(data);
  }, [category]);

  const handleClick = (id: number, name: string) => {
    handleCategoryClick(id, name);
  };

  return (
    <>
      {category?.map((category, i) => (
        <S.CategorySubCategoryContainer
          key={"category-" + category.id}
          className={cn([
            childOnly && category.category?.length > 0
              ? "cursor-default pl-4"
              : "cursor-pointer",
          ])}
        >
          <S.CategoryContainer>
            {/* if sub category is exists */}
            <S.CategoryToggleContainer
              onClick={() => {
                if (category.category) {
                  handleCollapseClick(i);
                } else {
                  handleClick(category.id, category.name);
                }
              }}
            >
              <HiOutlineChevronDown
                className={
                  `cursor-pointer transition-transform duration-300 ` +
                  cn([
                    subCategoryCollapse.at(i) ? "rotate-180" : "",
                    category?.category ? "opacity-100" : "opacity-0",
                  ])
                }
              />
            </S.CategoryToggleContainer>
            <S.CategoryClickArea
              className={cn([
                "w-full p-2",
                choosenCategory === category.id ? "font-bold" : "",
              ])}
              onClick={() => {
                if (childOnly && category.category?.length > 0) {
                  handleCollapseClick(i);
                  return;
                }
                handleClick(category.id, category.name);
                if (!subCategoryCollapse.at(i)) {
                  handleCollapseClick(i);
                }
              }}
            >
              <S.CategoryName>{category.name}</S.CategoryName>
            </S.CategoryClickArea>
          </S.CategoryContainer>
          {/* if subcategory is collapsed and sub category is exists */}
          {subCategoryCollapse.at(i) && category.category?.length > 0 ? (
            <S.SubCategoryContainer className="pl-5">
              <CategoryCollapse
                category={category?.category}
                handleCategoryClick={handleCategoryClick}
                childOnly={childOnly}
                choosenCategory={choosenCategory}
              />
            </S.SubCategoryContainer>
          ) : null}
        </S.CategorySubCategoryContainer>
      ))}
    </>
  );
};

export default CategoryCollapse;
