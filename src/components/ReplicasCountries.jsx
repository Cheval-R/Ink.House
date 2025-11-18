import Button from './Button';

const ReplicasCountries = ({ countries }) => {
  return (
    <div className='replicas-countries'>
      <ul className='replicas-countries__list'>
        {(countries.map((country, index) => {
          return (
            <li
              className='replica-countries__item'
              key={country}
            >
              <Button modifier={`${!index ? 'active' : ''}`}>
                {country}
              </Button>
            </li>)
        }))}
      </ul>
    </div >
  );
};

export default ReplicasCountries;