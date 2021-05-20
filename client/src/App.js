import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCountry, convertor } from "./actions/convertor";
import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const countryCodes = useSelector((state) => state.convertor.codes);
  const currency = useSelector((state) => state.convertor.convertedAmt);
  const [formData, setFormData] = useState({ country1: "INR", country2: "INR" });
  const { country1, country2 } = formData;

  useEffect(() => {
    dispatch(loadCountry());
    dispatch(convertor(country1, country2));
  }, [dispatch, country1, country2]);

  const handleSelect = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Currency Convertor</h1>
      <span>Country 1: </span>
      <select id="country1" name="country1" value={country1} onChange={(e) => handleSelect(e)}>
        {countryCodes.length ? (
          countryCodes.map((codes) => (
            <option key={`${codes._id}country1`} value={codes.code}>
              {codes.code}
            </option>
          ))
        ) : (
          <option value="">No Country</option>
        )}
      </select>
      <br></br>
      <br></br>
      <span>Country 2: </span>
      <select id="country2" name="country2" value={country2} onChange={(e) => handleSelect(e)}>
        {countryCodes.length ? (
          countryCodes.map((codes) => (
            <option key={`${codes._id}country2`} value={codes.code}>
              {codes.code}
            </option>
          ))
        ) : (
          <option value="">No Country</option>
        )}
      </select>
      <p>
        1 {country1} = {currency} {country2}
      </p>
    </div>
  );
};

export default App;
