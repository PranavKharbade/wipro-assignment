import { Link } from '@tanstack/react-router';

interface Props {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: Props) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link to="/" search={{ page: currentPage - 1 }}>
          Previous
        </Link>
      )}
      <span> Page {currentPage} of {totalPages} </span>
      {currentPage < totalPages && (
        <Link to="/" search={{ page: currentPage + 1 }}>
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
