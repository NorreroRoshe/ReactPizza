import React from 'react'
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import styles from "./Search.module.scss";
import { setSearchValue } from '../redux/Filter/slice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const inputRef = React.useRef<HTMLInputElement>(null);                //это для того чтобы мы могли фокусить инпут ( тоесть когда нажимаем на 'Х', фокус с инпута не пропадал)

  const onClickClear = (event: React.MouseEvent<SVGSVGElement>) => {
    dispatch(setSearchValue(''));
    setValue('');
    // document.querySelector('input').focus();         // вместо этой строчки , пишем то что строчка ниже ( эту не пишем потому что это js логика и jsx модет перепутать и не распознать инпут)
    if (inputRef.current) {                   //Первый способ задать типизацию ТС это через if, второй способ ниже (через оператора опциональной последовательности)
    inputRef.current.focus();                     
    }
    // inputRef.current?.focus();                     //это для того чтобы мы могли фокусить инпут ( тоесть когда нажимаем на 'Х', фокус с инпута не пропадал)
  }

  const updateSearchValue = React.useCallback(          //отложенное выполнение функции
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  )

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g id="search"><path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" /></g></svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder=' Поиск пиццы ... ' />
      {value &&
        <svg className={styles.clearIcon} onClick={onClickClear} width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z" fill="black" />
        </svg>}

    </div>)
}

export default Search;