import { baseApi } from "../../api/baseApi";

const carManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCars: builder.query({
            query: (data) => ({
                url: "/cars",
                method: "GET",
                params: data
            })
        }),
        searchAvailableCars: builder.query({
            query: (searchParams) => ({
                url: "/cars/search",
                method: "GET",
                params: searchParams
            })
        })
    })
})

export const { useGetAllCarsQuery, useSearchAvailableCarsQuery } = carManagementApi;