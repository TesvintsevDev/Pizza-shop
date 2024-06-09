import { useEffect, useState } from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://631f412758a1c0fe9f64ba15.mockapi.io/items')
		.then((response) => response.json())
		.then((data) => setItems(data))
	}, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
					{items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
