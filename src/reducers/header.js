import { CHANGE_EMPLOYEE, CHANGE_DEPARTMENT, CLEAR_ALL } from "../actions/type";
import { employees } from "../util/data";

const initialState = {
  selectedDepartment: null,
  employees: [],
  selectedEmployee: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DEPARTMENT:
      return {
        ...state,
        selectedEmployee: null,
        selectedDepartment: action.payload,
        employees: employees.filter(
          employee => employee.departments === action.payload
        )
      };
    case CHANGE_EMPLOYEE:
      return {
        ...state,
        selectedEmployee: action.payload
      };
    case CLEAR_ALL:
      return {
        selectedDepartment: null,
        employees: [],
        selectedEmployee: null
      };
    default:
      return state;
  }
}
