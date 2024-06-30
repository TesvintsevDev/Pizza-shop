import { useState } from "react";

const categoryList = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='categories'>
      {/* <ul>
        <li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? 'active' : ''}>Все</li>
        <li onClick={() => onClickCategory(1)} className={activeIndex === 1 ? 'active' : ''}>Мясные</li>
        <li onClick={() => onClickCategory(2)} className={activeIndex === 2 ? 'active' : ''}>Вегетарианская</li>
        <li onClick={() => onClickCategory(3)} className={activeIndex === 3 ? 'active' : ''}>Гриль</li>
        <li onClick={() => onClickCategory(4)} className={activeIndex === 4 ? 'active' : ''}>Острые</li>
        <li onClick={() => onClickCategory(5)} className={activeIndex === 5 ? 'active' : ''}>Закрытые</li>
      </ul> */}
      <ul>
        {categoryList.map((value, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? "active" : ""}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
