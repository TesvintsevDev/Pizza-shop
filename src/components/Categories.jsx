import { useState } from "react";

const categoryList = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='categories'>
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
