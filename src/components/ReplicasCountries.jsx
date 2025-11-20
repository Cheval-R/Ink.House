import Button from './Button';

const ReplicasCountries = ({ countries, country, setCountry }) => {
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
              key={c.key}
            >
              <Button
                classModifiers={`${country === c.key ? 'active' : ''}`}
                onClick={handleChangeCountry}
                value={c.key}
              >
                {c.title}
              </Button>
            </li>);
        }))}
      </ul>
    </div >
  );
};

export default ReplicasCountries;