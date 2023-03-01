import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
  }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query<[ProductType], null>({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query<[UserType], null>({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransaction: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactiona",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionQuery,
} = api;
