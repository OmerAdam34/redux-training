import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restaurantsApi = createApi({
  reducerPath: "restaurants",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openbrewerydb.org/breweries",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => `?per_page=50`,
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantsApi;
