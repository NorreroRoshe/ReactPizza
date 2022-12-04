import React from 'react'
import ReactPaginate from 'react-paginate';

import styles from "./Pagintaion.module.scss";

type PagintaionProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagintaion: React.FC<PagintaionProps> = ({ currentPage, onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        // renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagintaion;