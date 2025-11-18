import ReplicasArts from './ReplicasArts';
import ReplicasCountries from './ReplicasCountries';

const Replicas = ({ countries, arts }) => {
  return (
    <section className='replicas'>
      <div className='container'>
        <div className='replicas__header'>
          <h2 className='replicas__title'>Репродукции</h2>
          <ReplicasCountries
            countries={countries}
          />
        </div>
        <ReplicasArts
          arts={arts} />
      </div>
    </section>
  );
};

export default Replicas;