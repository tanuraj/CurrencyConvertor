import axios from "axios";
import { COUNTRY_CODE, CURRENCY_CONVERTED } from "./types";

//Load User
export const loadCountry = () => async (dispatch) => {
  try {
    const res = await axios.get("/countries");
    dispatch({ type: COUNTRY_CODE, payload: res });
  } catch (error) {
    console.error(error);
  }
};

export const convertor = (country1, country2) => async (dispatch) => {
  try {
    const res = await axios.get(`https://free.currconv.com/api/v7/convert?q=${country1}_${country2}&compact=ultra&apiKey=1166d542f3c514ec85c9`);
    dispatch({ type: CURRENCY_CONVERTED, payload: res.data[`${country1}_${country2}`] });
  } catch (error) {
    console.error(error);
  }
};
