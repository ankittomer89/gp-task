import { REQUEST_EMPLOYEE, RECEIVE_EMPLOYEE, CLEAR_ALL } from "../actions/type";

const initialState = {
  loading: false,
  employee: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_EMPLOYEE:
      return {
        ...state,
        loading: true,
        employee: null
      };
    case RECEIVE_EMPLOYEE:
      return {
        ...state,
        loading: false,
        employee: action.payload
      };
    case CLEAR_ALL:
      return {
        ...state,
        loading: false,
        employee: null
      };
    default:
      return state;
  }
}
