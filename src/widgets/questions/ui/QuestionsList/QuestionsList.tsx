// const LOGIN_DATA = {
//   username: 'artemtolmaschov@gmail.com',
//   password: 'Lidaas65#',
// };
//  const dataUserId = 'c6ea82a6-9f93-4bea-8433-afb8c962f923';
import { QuestionsItem } from '@/entities/qustions';
import './questionsList.scss';
import type { Question } from '@/entities/qustions/model/types';

export default function QuestionsList({questions}: {questions: Question[]}) {

  return (
    <div className="questions">
      {questions?.map((question) => (
        <QuestionsItem
          id={question.id}
          key={question.id}
          title={question.title}
          rate={question.rate}
          complexity={question.complexity}
          shortAnswer={question.shortAnswer}
          imageSrc={question.imageSrc}
        />
      ))}
    </div>
  );
}
