import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Replicas from './components/Replicas';


export const numberFormat = new Intl.NumberFormat('ru-RU',
  {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  });

const COUNTRIES = [
  "Франция",
  "Германия",
  "Англия",
];

const ARTS = [
  {
    country: 'Франция',
    image: '/france/f-0.jpg',
    author: 'Марсель Руссо',
    name: 'Охота Амура',
    type: 'Холст, масло (50х80) ',
    price: 14500,
  },
  {
    country: 'Франция',
    image: '/france/f-1.jpg',
    author: 'Анри Селин',
    name: 'Дама с собачкой',
    type: 'Акрил, бумага (50х80) ',
    price: 16500,
  },
  {
    country: 'Франция',
    image: '/france/f-2.jpg',
    author: 'Франсуа Дюпон',
    name: 'Процедура',
    type: 'Цветная литография (40х60) ',
    price: 20000,
  },
  {
    country: 'Франция',
    image: '/france/f-3.jpg',
    author: 'Луи Детуш',
    name: 'Роза',
    type: 'Бумага, акрил (50х80) ',
    price: 12000,
  },
  {
    country: 'Франция',
    image: '/france/f-4.jpg',
    author: 'Франсуа Дюпон',
    name: 'Птичья трапеза',
    type: 'Цветная литография (40х60) ',
    price: 22500,
  },
  {
    country: 'Франция',
    image: '/france/f-5.jpg',
    author: 'Пьер Моранж',
    name: 'Пейзаж с рыбой',
    type: 'Цветная литография (40х60) ',
    price: 20000,
  }, {
    country: 'Германия',
    image: '/germany/g-0.jpg',
    author: 'Курт Вернер',
    name: 'Над городом',
    type: 'Цветная литография (40х60) ',
    price: '16000',
  },
  {
    country: 'Германия',
    image: '/germany/g-1.jpg',
    author: 'Макс Рихтер',
    name: 'Птенцы',
    type: 'Холст, масло (50х80) ',
    price: 14500,

  },
  {
    country: 'Германия',
    image: '/germany/g-2.jpg',
    author: 'Мартин Майер',
    name: 'Среди листьев',
    type: 'Цветная литография (40х60) ',
    price: 20000,

  },
  {
    country: 'Германия',
    image: '/germany/g-3.jpg',
    author: 'Герман Беккер',
    name: 'Яркая птица',
    type: 'Цветная литография (40х60) ',
    price: 13000,

  },
  {
    country: 'Германия',
    image: '/germany/g-4.jpg',
    author: 'Вульф Бауэр',
    name: 'Дятлы',
    type: 'Бумага, акрил (50х80) ',
    price: 20000,

  },
  {
    country: 'Германия',
    image: '/germany/g-5.jpg',
    author: 'Вальтер Хартманн',
    name: 'Большие воды',
    type: 'Бумага, акрил (50х80) ',
    price: 23000,
  },
  {
    country: 'Англия',
    image: '/england/e-0.jpg',
    author: 'Пол Смит',
    name: 'Дикий зверь',
    type: 'Акварель, бумага (50х80) ',
    price: 19500,
  },
  {
    country: 'Англия',
    image: '/england/e-1.jpg',
    author: 'Джон Уайт',
    name: 'Скалистый берег',
    type: 'Цветная литография (40х60) ',
    price: 17500,

  },
  {
    country: 'Англия',
    image: '/england/e-2.jpg',
    author: 'Джим Уотсон',
    name: 'Река и горы',
    type: 'Акварель, бумага (50х80) ',
    price: 20500,

  },
  {
    country: 'Англия',
    image: '/england/e-3.jpg',
    author: 'Юджин Зиллион',
    name: 'Белый попугай',
    type: 'Цветная литография (40х60) ',
    price: 15500,

  },
  {
    country: 'Англия',
    image: '/england/e-4.jpg',
    author: 'Эрик Гиллман',
    name: 'Ночная рыба',
    type: 'Бумага, акрил (50х80) ',
    price: 12500,

  },
  {
    country: 'Англия',
    image: '/england/e-5.jpg',
    author: 'Альфред Барр',
    name: 'Рыжий кот',
    type: 'Цветная литография (40х60) ',
    price: 21000,
  }
];

function App() {
  const [cartList, setCartList] = useState([]);
  const [productInCartCount, setProductInCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);


  function putToCart(event) {
    const indexArt = cartList.findIndex((item) => item.name === event.target.value);
    console.log(cartList);
    if (indexArt === -1) {
      setCartList([...cartList, { name: event.target.value, count: 1 }]);
    } else {
      const newCart = cartList.slice();
      newCart[indexArt].count++;
      setCartList(newCart)
    }
    setProductInCartCount(1 + productInCartCount)
  }

  function pageClick(event) {
    if ((isCartOpen || isBurgerOpen) && (!event.target.closest('.shopping-cart')
      && !event.target.closest('.nav'))) {
      setIsCartOpen(false)
      setIsBurgerOpen(false)
    }
  }
  return (
    <div onClick={pageClick}>
      <Header
        arts={ARTS}
        cartList={cartList}
        productInCartCount={productInCartCount}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        isBurgerOpen={isBurgerOpen}
        setIsBurgerOpen={setIsBurgerOpen}
      />
      <Hero />
      <Replicas
        countries={COUNTRIES}
        arts={ARTS}
        putToCart={putToCart} />
    </div>
  );
}

export default App;
