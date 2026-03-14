import { useGetQuestionQuery } from "@/entities/qustions/api/questionsApi";
import { DEFAULT_LIMIT, PAGE_SIZE } from "@/shared/constants/constants";
import useQuestions from "@/shared/hooks/useQuestions";
import { useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function useQuestionNavigatio() {
    const { questions, totalQuestions, error: isQuestionError, refetch } = useQuestions();

    const allPages = useMemo(() => 
      totalQuestions ? Math.ceil(totalQuestions / PAGE_SIZE) : 0, 
      [totalQuestions]
    );

    const { id } = useParams();
    const questionId = Number(id);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const currentIndex = questions.findIndex((q) => q.id === questionId);
    const [questionIndex, setQuestionIndex] = useState(0);

    const nextPage = currentPage + 1;
    const prevPage = Math.max(1, currentPage - 1);

    const canGoNext = currentPage === allPages && currentIndex === questions.length - 1;
    const canGoPrev = currentPage === 1 && currentIndex === 0;

    const nextPageQuery = useGetQuestionQuery({ page: nextPage, limit: DEFAULT_LIMIT }, { skip: nextPage > allPages});
    
    const prevPageQuery = useGetQuestionQuery({ page: prevPage, limit: DEFAULT_LIMIT }, { skip: prevPage >= currentPage });

  return {
    questions,
    allPages,
    questionId,
    navigate,
    currentPage,
    currentIndex,
    questionIndex, 
    setQuestionIndex,
    nextPage,
    prevPage,

    nextPageData: nextPageQuery.data?.data ?? [],
    prevPageData: prevPageQuery.data?.data ?? [],

    isNextPageLoading: nextPageQuery.isLoading,
    isPrevPageLoading: prevPageQuery.isLoading,

    nextPageError: nextPageQuery.error,
    prevPageError: prevPageQuery.error,
    questionsError: isQuestionError,

    canGoNext,
    canGoPrev,

    refetch
  }
}
