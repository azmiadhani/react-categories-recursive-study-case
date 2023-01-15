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
    getCategoriesByMerchantID: builder.query<
      GetCategoriesByMerchantIDResponse,
      string
    >({
      query: (id) => ({
        url: `/categories/merchants/${id}`,
        method: "GET",
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useLazyGetAllCategoryQuery,
  useGetCategoriesByMerchantIDQuery,
  useLazyGetCategoriesByMerchantIDQuery,
} = categoryApi;
