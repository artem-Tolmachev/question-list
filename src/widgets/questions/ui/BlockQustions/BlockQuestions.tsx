import Pagination from '@/widgets/pagination/ui/PaginationBlock/PaginationBlock';
import QuestionsList from '../QuestionsList/QuestionsList';
import QuestionsHead from '../QuestionHead/QuestionsHead';
import QuestionSkeletonList from '../QuestionSkeleton/QuestionSkeleton';
import useQuestions from '@/shared/hooks/useQuestions';
import ErrorMessage from '@/shared/ui/ErrorMessage/ErrorMessage';
import './blockQeustions.scss';

export default function BlockQeustions() {
  const { questions, error, isLoading, isFetching, refetch } = useQuestions();

  if (isFetching || isLoading) return (
    <div className="block-questions">
      <QuestionSkeletonList/>
    </div>
  )
  
  if (error) return <ErrorMessage error={error} onRetry={refetch}/> ;

  return (
    <>
      <div className="block-questions">
        <QuestionsHead/>
        <QuestionsList questions={questions}/>
        <Pagination/>
      </div>
    </>
  );
}

