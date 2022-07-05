import ReactPaginate from "react-paginate";
import React from "react";
import style from './Pagination.module.scss'

export const Pagination = ({CurrentPage,onChangePage}) =>{
    return(
    <div>
        <ReactPaginate
            className={style.root}
            breakLabel="..."
            nextLabel=" >"
            onPageChange={(event)=>onChangePage(event.selected+1)}
            pageRangeDisplayed={5}
            pageCount={3}
            forcePage={CurrentPage - 1}
            previousLabel="< "
            renderOnZeroPageCount={null}
        />
    </div>)
}
