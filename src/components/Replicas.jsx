import { useState } from 'react';
import ReplicasArts from "./ReplicasArts";
import ReplicasCountries from "./ReplicasCountries";

const Replicas = ({ countries, arts, putToCart }) => {
  const [country, setCountry] = useState("france");
  return (
    <section className="replicas">
      <div className="container">
        <div className="replicas__header">
          <h2 className="replicas__title">Репродукции</h2>
          <ReplicasCountries
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
