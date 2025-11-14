const Navigation = ({ navList, isOpen }) => {
  return (
    <nav className={`nav ${isOpen ? "active" : ""}`}>
      <ul className='nav__list'>
        {
          navList.map(({ name, url }) => {
            return (
              <li className='nav__item' key={name}>
                <a className='nav__link' href={url}>{name}</a>
              </li>)
          })}
      </ul>
    </nav>
  );
};

export default Navigation;