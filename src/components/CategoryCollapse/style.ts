import tw from "tailwind-styled-components";

export const CategorySubCategoryContainer = tw.div<any>`
    w-full
    text-lg
    text-base-content/70
`;

export const CategoryContainer = tw.div<any>`
    flex 
    gap-1
    hover:bg-base-300
    rounded-md
    items-center
    justify-between
`;

export const CategoryToggleContainer = tw.div<any>`
    flex
    items-center
    justify-center
    p-2
`;

export const CategoryName = tw.span<any>`
    text-sm
`;

export const CategoryClickArea = tw.div<any>`
    pl-5
`;

export const SubCategoryContainer = tw.div<any>`
    w-full
`;
