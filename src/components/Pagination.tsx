import React from "react";
import "./pagination.css";
type PaginationProps = {
  pizzasPerPage: number;
  totalPizzas: number;
  paginationHandler: (num: number) => void;
  currentPage: number;
};

const Pagination = (props: PaginationProps) => {
  const { pizzasPerPage, totalPizzas, paginationHandler, currentPage } = props;
  let PageNumbers: any[] = [];

  for (
    let index = 1;
    index <= Math.ceil(totalPizzas / pizzasPerPage);
    index++
  ) {
    PageNumbers.push(index);
  }

  return (
    <nav>
      <ul className="pagination">
        {PageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginationHandler(number)}
            className={
              currentPage === number
                ? `active-page pagination-button`
                : "pagination-button"
            }
          >
            {number}
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
