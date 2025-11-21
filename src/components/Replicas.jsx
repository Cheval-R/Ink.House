import { useState } from 'react';
import ReplicasArts from "./ReplicasArts";
import CountriesButtons from "./CountriesButtons";

const Replicas = ({ countries, arts, putToCart }) => {
  const [country, setCountry] = useState("Франция");
  return (
    <section className="replicas">
      <div className="container">
        <div className="replicas__header">
          <h2 className="replicas__title">Репродукции</h2>
          <CountriesButtons
            countries={countries}
            country={country}
            setCountry={setCountry} />
        </div>
        <ReplicasArts
          arts={arts}
          country={country}
          putToCart={putToCart} />
      </div>
    </section>
  );
};

export default Replicas;
