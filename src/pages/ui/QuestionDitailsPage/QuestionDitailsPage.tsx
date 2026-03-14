import QuestionDitails from '@/widgets/questions/ui/QuestionDitails/QuestionDitails';
import './questionPage.scss';
import ArrowIconsPrev from '@/shared/ui/ArrowIcons/ArrowIconsPrev';
import { useNavigate } from 'react-router-dom';

export default function QuestionDitailsPage() {
  const navigate = useNavigate();

  return (
    <section className="question-page">
      <div className="question-page__container container">
        <button className="question-page__back" onClick={() => navigate('/?page=1')}>
          <ArrowIconsPrev width={20} height={20} />
          Назад
        </button>
        <QuestionDitails />
      </div>
    </section>
  );
}
