
interface Props{
    currentPage: number;
    totalPages: number;
}
export const getPageNumbers = ({currentPage, totalPages}: Props) => {
  const maxPage = 6;
  if(totalPages <= maxPage){
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages = [];
  
  pages.push(1);
  
  if (currentPage > 3) {
    pages.push('...');
  }
  
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + maxPage);
  
  for (let i = start; i <= end; i++) {
    if (i > 1 && i < totalPages) {
      pages.push(i);
    }
  }
  
  if (currentPage < totalPages - 2) {
    pages.push('...');
  }
  
  if (totalPages > 1) {
    pages.push(totalPages);
  }
  
  return pages;
};