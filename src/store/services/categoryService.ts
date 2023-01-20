import {
  GetAllCategoryResponse,
  GetAncestorsCategoryResponse,
  GetCategoriesByMerchantIDResponse,
} from "../../types/response/category";
import { baseApi } from "../store";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query<GetAllCategoryResponse, string>({
      query: (query) => ({
        url: `/categories?${query}`,
        method: "GET",
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetAllCategoryQuery, useLazyGetAllCategoryQuery } =
  categoryApi;
