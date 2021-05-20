import { COUNTRY_CODE, CURRENCY_CONVERTED } from "../actions/types";

const initialState = {
  codes: {},
  convertedAmt: 1,
};

const convertor = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNTRY_CODE:
      return { ...state, codes: payload.data };
    case CURRENCY_CONVERTED:
      return { ...state, convertedAmt: payload };
    default:
      return state;
  }
};

export default convertor;
