import React from "react";
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';

type CategoriesProps = {
  value: number;
  onClickCategory: (idx: number) => void;             //так обозначается тип функции в TS , а idx я написал чтобы было понятно ,что она не имеет никакого отношения с тем что передаетя в вызове функции (map)
                                                      //Если мы хотим чтобы функция была опциональной (необязательной) , то ставим знак вопрос после фукнции -> 'onClickCategory?: ...'
}

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Catigories: React.FC<CategoriesProps> = React.memo(({ value, onClickCategory}) => {           //React.memo нужен чтобы предотвратить лишние перерисовки в компоненте , если поменялись промы и т.д.
  useWhyDidYouUpdate('Categories', { value, onClickCategory});


  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  //   // console.log(1213212123113);
  //   //так лучше делать если у тебя мого задач 
  // };

  return (
    <div className="categories">
      <ul>
        {
          categories.map((categoryName, i) => (<li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>{categoryName}</li>))
        }
      </ul>
    </div>
  );
});

export default Catigories;