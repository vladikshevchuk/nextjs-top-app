import React from 'react';
import cn from 'classnames';
import { SortEnum, SortProps } from './Sort.props';
import styles from "./Sort.module.css";
import SortIcon from "./sort.svg";

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div className={styles.sortName} id="sort" >Сортировка</div>
      <button
        id="rating"
        className={cn({
          [styles.active]: sort === SortEnum.Rating
        })}
        onClick={() => setSort(SortEnum.Rating)}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.sortIcon} />По рейтенгу
      </button>
      <button
        id="price"
        className={cn({
          [styles.active]: sort === SortEnum.Price
        })}
        onClick={() => setSort(SortEnum.Price)}
        aria-labelledby="sort price"
      >
        <SortIcon className={styles.sortIcon} />По цене
      </button>
    </div>
  );
};