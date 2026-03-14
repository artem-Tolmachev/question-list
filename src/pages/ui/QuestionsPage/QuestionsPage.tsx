import { BlockFilters } from '@/widgets/filters';
import { BlockQustions } from '@/widgets/questions';
import './questionsPage.scss';

export default function QuestionsPage() {
  return (
    <section className='questions-page'>
      <div className='questions-page__container container'>
        <BlockQustions />
        <BlockFilters />
      </div>
    </section>
  );
}
