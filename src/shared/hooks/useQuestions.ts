import { useGetQuestionQuery } from '@/entities/qustions/api/questionsApi'
import useFilterQuestions from './useFilterQuestions';

export default function useQuestions() {
  const { filters } = useFilterQuestions();
    
  const {data, error, isLoading, isFetching, refetch} = useGetQuestionQuery(filters);

  return {
    questions: data?.data ?? [],
    totalQuestions: data?.totalQuestions,
    error,
    isLoading,
    isFetching,
    refetch
  }
}



