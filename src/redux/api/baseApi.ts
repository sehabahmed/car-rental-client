/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    BaseQueryApi,
    BaseQueryFn,
    createApi,
    DefinitionType,
    FetchArgs,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  import { toast } from "sonner";
import { RootState } from "../features/store";
import { logout, setUser } from "../features/auth/authSlice";
  
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://car-rental-backend-smoky.vercel.app/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
  
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  });
  
  const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
  > = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 403) {
      toast.error((result.error.data as any).message);
    }
    if (
      result?.error?.status === 404 &&
      result.error.data &&
      typeof (result.error.data as any).message === "string"
    ) {
      toast.error((result.error.data as any).message);
    }
  
    if (result?.error?.status === 401) {
      // Send Refresh
      console.log("Sending refresh token");
  
      const res = await fetch("api/v1/auth/refresh-token", {
        method: "POST",
        credentials: "include",
      });
  
      const data = await res.json();
  
      console.log(data);
  
      if (data?.data?.accessToken) {
        const user = (api.getState() as RootState).auth.user;
  
        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken,
          })
        );
  
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    }
  
    return result;
  };
  
  export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
  });
  