import { numberFormat } from "./../App"

const ShoppingList = ({ cartList, isCartOpen, productInCartCount }) => {

  function numWord(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  }
  let totalPrice = 0;
  return (
    <div className={`shopping-cart ${isCartOpen ? "active" : ""}`} >
      <h3 className='shopping-cart__title'>
        В корзине <span style={{ fontSize: "22px" }}>{productInCartCount}</span> {numWord(productInCartCount, ['картина', 'картины', 'картин'])}
      </h3>
      <ul className='shopping-cart__list'>
        {cartList.map((product) => {
          totalPrice += product.price * product.count;
          return (
            <li
              className='shopping-cart__item cart-item'
              key={product.name}
            >
              <div className='cart-item__image'><img src={product.image} alt="" /></div>
              <div className='cart-item__info'>
                <p className='cart-item__name'>{product.name}</p>
                <p className='cart-item__author'>{product.author}</p>
                <p className='cart-item__type'>{product.type}</p>
                <p className='cart-item__price'>{`${numberFormat.format(product.price * product.count)}`} - {product.count} шт.</p>
              </div>
            </li>)
        })}
      </ul>
      {totalPrice ? <p className='shopping-cart__total'>Итого: <b style={{ fontSize: "20px" }}>{numberFormat.format(totalPrice)}</b></p> : <></>}
    </div >
  );
};

export default ShoppingList;