import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import qs from 'qs';

import Catigories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/index';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagintaion from '../components/Pagination';
import { useAppDispatch } from '../components/redux/store';
import { selectFilter } from '../components/redux/Filter/selectors';
import { selectPizzaData } from '../components/redux/Pizza/selectors';
import { setCategoryId, setCurrentPage } from '../components/redux/Filter/slice';
import { fetchPizzas } from '../components/redux/Pizza/asyncAtions';
// import { SeachPizzaParams } from '../components/redux/sclices/Pizza/Slice';
import Modal from '../components/Modal/Modal';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const sortType = sort.sortProperty;
  const { items, status } = useSelector(selectPizzaData);

  const onChangeCategory = React.useCallback((id: number) => {                  //React>useCallback не дает перерисовать функцию
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  }

  const getPizzas = async () => {

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

    // fetch(`https://6338275d132b46ee0beb384a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    //   .then((res) => res.json())
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsLoading(false);
    //   });                                  //Это метод fetch

    // axios
    //   .get(`https://6338275d132b46ee0beb384a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    //   .then(response => {
    //     setItems(response.data);
    //     setIsLoading(false);
    //   }).catch((err) => {              //находит и показывает ошибку
    //     setIsLoading(false);
    //   })                                  //Это метод axios



    dispatch(
      fetchPizzas({
        category,
        order,
        sortBy,
        search,
        currentPage: String(currentPage),
    }),
    );
    window.scrollTo(0, 0)
  }


  // React.useEffect(() => {
  //   // window.scrollTo(0, 0)
  //   if (!isSearch.current) {
  //     getPizzas();
  //   }

  //   isSearch.current = false;

  // }, [categoryId, sortType, searchValue, currentPage]);                    //всегда было


  

    React.useEffect(() => {
      getPizzas();
    }, [categoryId, sortType, searchValue, currentPage]);                               //Убрать в дальнейшем




  const pizzas = items
    // .filter((obj) => {       //Этот метод больше статический, без использования запроса на бэк          //перед тем как отрендерить пиццы -> отфильтруем
    //   if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((obj: any) => 
      <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Catigories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {
        status === 'error' ? (<div className='content__error-info'>
          <h2> Произошла ошибка <span>😕</span></h2>
          <p>
            Не удолось загрузить пиццы.
            Попробуйте повторить попытку позже... Наврядли она будет работать позже, но вы на всякий случай попытайтесь :)
          </p>
        </div>
        ) : (<div className="content__items">
          {status === 'loading'
            ? skeletons
            : pizzas}
        </div>)
      }
      <Pagintaion currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
  }


























// {
  //СВОИ
  //Убрать свои
    // React.useEffect(() => {
    //   getPizzas();
    // }, [categoryId, sortType, searchValue, currentPage]);
    //СВОЕ1


    // React.UseEffect(() => {
    //   if(isMounted.current) {
    //     const params =  {
    //       categoryId: categoryId > 0 ? categoryId : null,
    //       sortProperty: sortType,
    //       currentPage,
    //     };

    //     const queryString = qs.stringify(params, { skipNulls: true });

    //     navigate(`/?${queryString}`);
    //   }
    //   if(!window.location.search) {
          //  dispatch(fetchPizzas({} as SeachPizzaParams));
    //   }
    // }, [categoryId, sortType, searchValue, currentPage]);
    //СВОЕ 2

 // React.useEffect(() => {
    //   if (window.location.search) {
    //     const params = (qs.parse(window.location.search.substring(1)) as unknown) as SeachPizzaParams;

    //     const sort = list.find((obj) => obj.sortProperty === params.sortBy);

    // dispatch(setFilters({
      // searchValue: params.search,
      // categoryId: Number(params.category),
      // currentPage: Number(params.currentPage),
      // sort: sort || list[0],
  //   }))
  // }
  // isMounted.current = true;
 // }, []);
    //СВОЕ 3
  //СВОИ









    // React.useEffect(() => {
    //   if (window.location.search) {
    //     const params = qs.parse(window.location.search.substring(1));

    //     const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

    //     dispatch(setFilters({
    //       ...params,
    //       sort,
    //     }))
    //     isSearch.current = true;
    //   }
    // }, [categoryId, sortType, searchValue, currentPage]);



    // React.useEffect(() => {
    //   if (isMounted.current) {
    //     const queryString = qs.stringify({
    //       sortProperty: sort.sortProperty,
    //       categoryId,
    //       currentPage
    //     })

    //     navigate(`?${queryString}`)
    //   }
    //   isMounted.current = true;
    // }, [categoryId, sortType, searchValue, currentPage]);






    //ЧТОООООООООООООООООООООООООООООООООООООО озночают эти функции
  // }