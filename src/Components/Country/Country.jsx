import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitFlag }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // console.log("Button clicked");
    // setVisited(true);

    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    //3
    setVisited(!visited);
    // setVisited(visited ? false : true);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.png.alt} />
      <h2>Name:{country.name.common}</h2>
      <p>Population: {country.population.population}</p>
      <p> Language: {country.languages.languages.eng}</p>
      <p>Region: {country.region.region}</p>
      <p>Capital: {country.capital.capital}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
      <button
        onClick={() => {
          handleVisitFlag(country.flags.flags.png);
        }}
      >
        Add flags
      </button>
    </div>
  );
};

export default Country;
