import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Replicas from './components/Replicas';

const COUNTRIES = [
  { title: "Франция", key: "france" },
  { title: "Германия", key: "germany" },
  { title: "Англия", key: "england" }
];
// добавить фильтр стран, вместо массивов
const ARTS = [
  {
    country: 'france',
    image: '/france/f-0.jpg',
    author: 'Марсель Руссо',
    name: 'Охота Амура',
    type: 'Холст, масло (50х80) ',
    price: '14 500 руб',
    country: 'france',
  },
  {
    country: 'france',
    image: '/france/f-1.jpg',
    author: 'Анри Селин',
    name: 'Дама с собачкой',
    type: 'Акрил, бумага (50х80) ',
    price: '16 500 руб',
    country: 'france',
  },
  {
    country: 'france',
    image: '/france/f-2.jpg',
    author: 'Франсуа Дюпон',
    name: 'Процедура',
    type: 'Цветная литография (40х60) ',
    price: '20 000 руб',
    country: 'france',
  },
  {
    country: 'france',
    image: '/france/f-3.jpg',
    author: 'Луи Детуш',
    name: 'Роза',
    type: 'Бумага, акрил (50х80) ',
    price: '12 000 руб',
    country: 'france',
  },
  {
    country: 'france',
    image: '/france/f-4.jpg',
    author: 'Франсуа Дюпон',
    name: 'Птичья трапеза',
    type: 'Цветная литография (40х60) ',
    price: '22 500 руб',
    country: 'france',
  },
  {
    country: 'france',
    image: '/france/f-5.jpg',
    author: 'Пьер Моранж',
    name: 'Пейзаж с рыбой',
    type: 'Цветная литография (40х60) ',
    price: '20 000 руб',
    country: 'france',
  }, {
    country: 'germany',
    image: '/germany/g-0.jpg',
    author: 'Курт Вернер',
    name: 'Над городом',
    type: 'Цветная литография (40х60) ',
    price: '16 000 руб',
  },
  {
    country: 'germany',
    image: '/germany/g-1.jpg',
    author: 'Макс Рихтер',
    name: 'Птенцы',
    type: 'Холст, масло (50х80) ',
    price: '14 500 руб',

  },
  {
    country: 'germany',
    image: '/germany/g-2.jpg',
    author: 'Мартин Майер',
    name: 'Среди листьев',
    type: 'Цветная литография (40х60) ',
    price: '20 000 руб',

  },
  {
    country: 'germany',
    image: '/germany/g-3.jpg',
    author: 'Герман Беккер',
    name: 'Яркая птица',
    type: 'Цветная литография (40х60) ',
    price: '13 000 руб',

  },
  {
    country: 'germany',
    image: '/germany/g-4.jpg',
    author: 'Вульф Бауэр',
    name: 'Дятлы',
    type: 'Бумага, акрил (50х80) ',
    price: '20 000 руб',

  },
  {
    country: 'germany',
    image: '/germany/g-5.jpg',
    author: 'Вальтер Хартманн',
    name: 'Большие воды',
    type: 'Бумага, акрил (50х80) ',
    price: '23 000 руб',
  },
  {
    country: 'england',
    image: '/england/e-0.jpg',
    author: 'Пол Смит',
    name: 'Дикий зверь',
    type: 'Акварель, бумага (50х80) ',
    price: '19 500 руб',
  },
  {
    country: 'england',
    image: '/england/e-1.jpg',
    author: 'Джон Уайт',
    name: 'Скалистый берег',
    type: 'Цветная литография (40х60) ',
    price: '17 500 руб',

  },
  {
    country: 'england',
    image: '/england/e-2.jpg',
    author: 'Джим Уотсон',
    name: 'Река и горы',
    type: 'Акварель, бумага (50х80) ',
    price: '20 500 руб',

  },
  {
    country: 'england',
    image: '/england/e-3.jpg',
    author: 'Юджин Зиллион',
    name: 'Белый попугай',
    type: 'Цветная литография (40х60) ',
    price: '15 500 руб',

  },
  {
    country: 'england',
    image: '/england/e-4.jpg',
    author: 'Эрик Гиллман',
    name: 'Ночная рыба',
    type: 'Бумага, акрил (50х80) ',
    price: '12 500 руб',

  },
  {
    country: 'england',
    image: '/england/e-5.jpg',
    author: 'Альфред Барр',
    name: 'Рыжий кот',
    type: 'Цветная литография (40х60) ',
    price: '21 000 руб',
  }
];

function App() {
  const [cartList, setCartList] = useState([]);
  function putToCart(event) {
    console.log(cartList);
    console.log(event.target.value);
    setCartList([...cartList, event.target.value])
  }
  return (
    <>
      <Header
        arts={ARTS}
        cartList={cartList}
      />
      <Hero />
      <Replicas
        countries={COUNTRIES}
        arts={ARTS}
        putToCart={putToCart} />
    </>
  );
}

export default App;
