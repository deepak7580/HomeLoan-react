import { applyMiddleware, createStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  customerList: [],
};
//action type
const CUSTOMER_GET_ALL_ACTION_TYPE = "CUSTOMER_GET_ALL_ACTION_TYPE";
const CUSTOMER_GET_BY_ID_ACTION_TYPE = "CUSTOMER_GET_BY_ID_ACTION_TYPE";
const CUSTOMER_CREATE_ACTION_TYPE = "CUSTOMER_CREATE_ACTION_TYPE";
const CUSTOMER_UPDATE_ACTION_TYPE = "CUSTOMER_UPDATE_ACTION_TYPE";
const CUSTOMER_DELETE_ACTION_TYPE = "CUSTOMER_DELETE_ACTION_TYPE";

//actions
export const getAllCustomerAction = () => {
  return async (dispatch) => {
    const url = `http://localhost:8080/customer/viewCustomer`;
    const response = await axios.get(url);

    console.log(response.data);
    dispatch({ type: "CUSTOMER_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

function CustomerReducer(state = initState, action) {
  switch (action.type) {
    case CUSTOMER_GET_ALL_ACTION_TYPE:
      return { ...state, customerList: action.payload };
    default:
      return state;
  }

  return state;
}

//applied middleware for async operation
const store = createStore(CustomerReducer, applyMiddleware(thunk));
export { store };
