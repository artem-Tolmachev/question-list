import { baseApi } from "@/shared/api/baseApi";
import type { FetchQuestionsPapams, QuestionsResponse, Question } from "../model/types";

interface ResponseData {
  data: Question[];
  totalQuestions: number;
}

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestion: builder.query<ResponseData, FetchQuestionsPapams>({
      query: (params) => {
        const queryParams: FetchQuestionsPapams = {
           page: params.page || 1,
           limit: params.limit || 10,
           skillFilterMode: 'ANY',
        }
        if(params.title && params.title.length > 0){
          queryParams.title = params.title;
        }
        if(params.rate && params.rate.length > 0){
          queryParams.rate = params.rate;
        }
        if(params.complexity && params.complexity.length > 0){
          queryParams.complexity = params.complexity;
        }
        if(params.skills && params.skills.length > 0){
          queryParams.skills = params.skills;
        }
        if(params.specializationId !== undefined){
          queryParams.specializationId = params.specializationId;
        }
        return {
          url: 'questions/public-questions',
          params: queryParams
        }
      },
      transformResponse(response: QuestionsResponse) {
        return {
          page: response.page,
          data: response.data,
          totalQuestions: response.total
        }
      }
    }),
    getQuestionById: builder.query({
      query: (id: number) => ({
        url: `questions/public-questions/${id}`
      })
    })
  }),
});

export const { useGetQuestionQuery, useGetQuestionByIdQuery, usePrefetch } = questionsApi;