import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (desh) => {
    const UpdateVisitedCountries = [...visitedCountries, desh];
    setVisitedCountries(UpdateVisitedCountries);
  };

  const handleVisitFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);

  const countries = countriesData.countries;

  return (
    <div>
      <h3> Country we have {countries.length}</h3>
      <h1>Total Country Visited: {visitedFlags.length}</h1>

      <ol>
        {visitedCountries.map((desh) => (
          <li>{desh.name.official}</li>
        ))}
      </ol>

      <div>
        {visitedFlags.map((flag) => (
          <img src={flag}></img>
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitFlag={handleVisitFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
