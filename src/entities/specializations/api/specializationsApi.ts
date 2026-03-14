import { baseApi } from "@/shared/api/baseApi";
import type { Specialization, SpecializationsResponce } from "../model/types";

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<Specialization[], undefined>({
      query: () => ({
        url: 'specializations',
      }),
      transformResponse (response: SpecializationsResponce) {
        return response.data
      }
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;