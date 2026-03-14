import Pagination from '@/shared/ui/Pagination/Pagination';
import { PAGE_SIZE } from '@/shared/constants/constants';
import useQuestions from '@/shared/hooks/useQuestions';
import ListEmpty from '@/widgets/questions/ui/ListEmpty/ListEmpty';

export default function PaginateQuestions() {
  const { totalQuestions } = useQuestions();
  const totalPages =  totalQuestions ? Math.ceil(totalQuestions / PAGE_SIZE) : false;
  if(!totalPages) return <ListEmpty/>
  
  return (
    <>
      {!(totalPages <= 1) && <Pagination totalPages={totalPages} />}
    </>
  );
}
