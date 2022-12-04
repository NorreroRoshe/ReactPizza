import { sortPropertyEnum } from "./slice";

export type Sort = {
  name: string;
  sortProperty: sortPropertyEnum;
}

export interface FilterSliceState {
  searchValue: string,
  categoryId: number,
  currentPage: number,
  sort: Sort,
}