import { useState } from 'react';
import Burger from './Burger';
import Cart from './Cart';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  const [shoppingCartList, setShoppingCartList] = useState([
    { name: 'кукурузу' }, { name: 'potato' }, { name: 'carrot' },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <section className='header'>
      <div className='header__wrapper container'>
        <Logo />
        <div className='header__content'>
          <Burger
            isBurgerOpen={isBurgerOpen}
            setIsBurgerOpen={setIsBurgerOpen}
          />
          <Navigation
            isBurgerOpen={isBurgerOpen}
            navList={[
              { name: 'Репродукции', url: '#!' },
              { name: 'Новинки', url: '#!' },
              { name: 'О нас', url: '#!' },
            ]} />
          <Cart
            cartList={shoppingCartList}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;