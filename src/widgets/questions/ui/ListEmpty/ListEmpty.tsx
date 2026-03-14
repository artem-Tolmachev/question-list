import { ResetButton } from '@/features/filtersReset';
import './listEmpty.scss';
export default function ListEmpty() {
  return (
    <div className="emptyList">
      <div className='emptyList__content'>
        <ResetButton />
        <p>
          К сожалению, по запросу ничего не найдено. Попробуйте изменить запрос или воспользуйтесь
          нашими категориями.
        </p>
      </div>
    </div>
  );
}
