import { useState } from 'react';
import Header from './components/Header'
import Hero from './components/Hero';
import Replicas from './components/Replicas';

const COUNTRIES = ["Франция", "Германия", "Англия"];

const ARTS = [
  {
    image: '/france/f-0.jpg',
    author: 'Марсель Руссо',
    name: 'Охота Амура',
    type: 'Холст, масло (50х80) ',
    price: '14 500 руб',
    country: 'france'
  },
  {
    image: '/france/f-1.jpg',
    author: 'Анри Селин',
    name: 'Дама с собачкой',
    type: 'Акрил, бумага (50х80) ',
    price: '16 500 руб',
    country: 'france'
  },
  {
    image: '/france/f-2.jpg',
    author: 'Франсуа Дюпон',
    name: 'Процедура',
    type: 'Цветная литография (40х60) ',
    price: '20 000 руб',
    country: 'france'
  },
  {
    image: '/france/f-3.jpg',
    author: 'Луи Детуш',
    name: 'Роза',
    type: 'Бумага, акрил (50х80) ',
    price: '12 000 руб',
    country: 'france'
  },
  {
    image: '/france/f-4.jpg',
    author: 'Франсуа Дюпон',
    name: 'Птичья трапеза',
    type: 'Цветная литография (40х60) ',
    price: '22 500 руб',
    country: 'france'
  },
  {
    image: '/france/f-5.jpg',
    author: 'Пьер Моранж',
    name: 'Пейзаж с рыбой',
    type: 'Цветная литография (40х60) ',
    price: '20 000 руб',
    country: 'france'
  },
  // {
  //   image: '',
  //   author: '',
  //   name: '',
  //   type: '',
  //   price: '',
  // },
]

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Replicas
        countries={COUNTRIES}
        arts={ARTS} />
    </>
  )
}

export default App
