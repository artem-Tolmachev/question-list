import { PaginateQuestions } from "@/features/paginate-questions";
import './paginationBlock.scss';
export default function Pagination() {
  
  return (
    <div className="paginationBlock">
      <PaginateQuestions/>
    </div>
  )
}
