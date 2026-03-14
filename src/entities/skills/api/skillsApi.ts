import { baseApi } from "@/shared/api/baseApi";
import type { Skill, SkillsResponse } from "../model/types";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<Skill[], undefined>({
      query: () => ({
        url: 'skills',
          params: {
            limit: 14  
          }
      }),
      transformResponse(response: SkillsResponse) {
        return response.data
      },
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;