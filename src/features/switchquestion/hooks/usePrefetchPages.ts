import { questionsApi } from '@/entities/qustions/api/questionsApi';
import { DEFAULT_LIMIT } from '@/shared/constants/constants';
import { useEffect } from 'react';


export default function usePrefetchPages(prevPage: number, nextPage: number) {
  const prefetchQuestions = questionsApi.usePrefetch('getQuestion');

  useEffect(() => {
    if(prevPage){
      prefetchQuestions({ page: prevPage, limit: DEFAULT_LIMIT });
    }
    if(nextPage){
      prefetchQuestions({ page: nextPage, limit: DEFAULT_LIMIT });
    }
  }, [prefetchQuestions, prevPage, nextPage])

}
