import fetch from "cross-fetch";
import { REQUEST_EMPLOYEE, RECEIVE_EMPLOYEE } from "./type";

export const fetchEmployee = id => dispatch => {
  dispatch({ type: REQUEST_EMPLOYEE });
  fetch("https://reqres.in/api/users/" + id)
    .then(res => res.json())
    .then(employee =>
      dispatch({
        type: RECEIVE_EMPLOYEE,
        payload: employee.data
      })
    )
    .catch(err => console.log(err));
};
