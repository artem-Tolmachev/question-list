import QuestionDitailsRight from '../QuestionDitailsRight/QuestionDitailsRight';
import BlockLeftSkeleton from '../QuestionDitailsSkeleton/BlockLeftSkeleton';
import BlockRightSkeletonList from '../QuestionDitailsSkeleton/BlockRightSkeleton';
import { useGetQuestionByIdQuery } from '@/entities/qustions/api/questionsApi';
import QuestionDitailsLeft from '../QuestionDitailsLeft/QuestionDitailsLeft';
import { useParams } from 'react-router-dom';
import useQuestionNavigatio from '@/features/switchquestion/hooks/useQuestionNavigatio';
import './questionDitails.scss';
import ErrorMessage from '@/shared/ui/ErrorMessage/ErrorMessage';

export default function QuestionDitails() {
  const { id } = useParams();
  const questionId = Number(id);
  const { data, isLoading, error, refetch: refetchById } = useGetQuestionByIdQuery(questionId);
  const { nextPageError, prevPageError, questionsError, refetch } = useQuestionNavigatio();

  const question = data;
  
  return (
    <div className="question-ditails">
      {isLoading ? (
        <>
          <BlockLeftSkeleton />
          <BlockRightSkeletonList />
        </>
      ) : (
        <>
          {error ? (
            <ErrorMessage error={error} onRetry={refetchById} />
          ) : (nextPageError || prevPageError || questionsError) ? (
            <ErrorMessage error={nextPageError || prevPageError || questionsError} onRetry={refetch} />
          ) : (
            <QuestionDitailsLeft
              description={question.description}
              title={question.title}
              shortAnswer={question?.shortAnswer}
              longAnswer={question.longAnswer}
              updatedBy={question.updatedBy}
            />
          )}
          <QuestionDitailsRight
            complexity={question.complexity}
            skills={question.questionSkills}
            keywords={question.keywords}
            author={question.updatedBy}
            rate={question.rate}
          />
        </>
      )}
    </div>
  );
}
