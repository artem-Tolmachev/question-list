import ArrowNext from '../ArrowButtons/ArrowNext';
import ArrowPrev from '../ArrowButtons/ArrowPrev';
import { getPageNumbers } from './getPageNumbers';
import clsx from 'clsx';
import './pagination.scss';
import useFilterQuestions from '@/shared/hooks/useFilterQuestions';

interface Props {
  totalPages: number;
}

export default function Pagination({ totalPages }: Props) {
  const {switchPage, currentPage} = useFilterQuestions();
  const pages = getPageNumbers({ totalPages, currentPage });

  return (
    <>
      <ArrowPrev 
      handlePagination={switchPage} 
      currentPage={currentPage} 
      totalPages={totalPages}
      />
      <div className="pagination">
        {pages.map((page, index) => {
          if (page === '...') {
            return <span key={`points-${index}`} className="pagination__dots">...</span>;
          }
          return (
            <button
              onClick={() => switchPage(page as number)}
              className={clsx('pagination__item', currentPage === page && 'pagination__axtive')}
              key={index}
            >
              {page}
            </button>
          );
        })}
      </div>
      <ArrowNext 
      handlePagination={switchPage} 
      currentPage={currentPage} 
      totalPages={totalPages}
      />
    </>
  );
}
