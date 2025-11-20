const ShoppingList = ({ cartList, isCartOpen }) => {
  return (
    <div className={`shopping-cart ${isCartOpen ? "active" : ""}`} >
      <ul className='shopping-cart__list'>
        {/* {cartList.map((product) => {
          return (<li className='shopping-cart__item' key={product.name}>{product.name}</li>)
        })} */}
      </ul>
    </div >
  );
};

export default ShoppingList;