export interface ArrowButton {
  handlePagination: (args: number) => void;
  currentPage: number;
  totalPages: number;
}