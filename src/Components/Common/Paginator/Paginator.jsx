import React, { useState } from "react";
import s from "./Paginator.module.css";
import cn from "classnames";
import arrow from "./../../../Images/arrow.png";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && (
        <button
          className={s.arrow_btn}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
            onPageChanged(leftPortionPageNumber - portionSize);
          }}
        >
          <img className={s.arrow + " " + s.leftArrow} src={arrow} alt="" />
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(
                { [s.selectedPage]: currentPage === p },
                s.pageNumber
              )}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className={s.arrow_btn}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
            onPageChanged(leftPortionPageNumber + portionSize);
          }}
        >
          <img className={s.arrow} src={arrow} alt="" />
        </button>
      )}
    </div>
  );
};

export default Paginator;
