import Button from './Button';

const CountriesButtons = ({ countries, country, setCountry }) => {
  function handleChangeCountry(event) {
    setCountry(event.target.value);
  }
  return (
    <div className='replicas-countries'>
      <ul className='replicas-countries__list'>
        {(countries.map((c, index) => {
          return (
            <li
              className='replica-countries__item'
              key={c}
            >
              <Button
                classModifiers={`${country === c ? 'active' : ''}`}
                onClick={handleChangeCountry}
                value={c}
              >
                {c}
              </Button>
            </li>);
        }))}
      </ul>
    </div >
  );
};

export default CountriesButtons;