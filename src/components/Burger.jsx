const Burger = ({ isBurgerOpen, setIsBurgerOpen }) => {
  return (
    <button
      type='button'
      className={`burger ${isBurgerOpen ? 'active' : ''}`}
      onClick={() => { setIsBurgerOpen(!isBurgerOpen); console.log("click") }}
    >
      <span className="burger__top"></span>
      <span className="burger__middle"></span>
      <span className="burger__bottom"></span>
    </button >
  );
};

export default Burger;