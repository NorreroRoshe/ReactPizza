export type Pizza = {
  id: string;
  name: string;
  types: number[];
  price: number;
  count: number;
  imageUrl: string;
  sizes: number[];
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;               //'loading' | 'success' | 'error';     ->     Можно написать и так просто мы вынести эти значения в 'enum Status' ( Выше )
}

export type SeachPizzaParams = {
  sortBy: string;
  category: string;
  order: string;
  search: string;
  currentPage: string;
}                             //Ниже будет код где,чтобы все это не писать можно сделать более сокращенную версию в случае если все значения одинаковые (string, number, ...)

//  type fetchPizzasArgs = Record<string, string>          //Все ключи и значения строчки
