import '../QuestionsList/questionsList.scss';
import '../../../../entities/qustions/ui/QuestionsItem/questionsItem.scss';
import './questionSkeleton.scss';
import '../QuestionHead/questionsHead.scss';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';

function QuestionSkeleton() {
  return (
    <div className="questions-skeleton">
      <div className="questions-skeleton__inner">
        <Skeleton width={60} height={24} radius={8}/>
        <Skeleton width={5} height={24} radius={8}/>
      </div>
    </div>
  );
}

export default function QuestionSkeletonList() {
  const count = 10;

  return (
    <div>
      <div className="block-questions__text">
        <Skeleton width={20} height={30} radius={8}/>
      </div>
      {Array.from({ length: count }).map((_, i) => (
        <QuestionSkeleton key={i}/>
      ))}
    </div>
  );
}
