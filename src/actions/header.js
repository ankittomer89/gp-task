import { CHANGE_EMPLOYEE, CHANGE_DEPARTMENT, CLEAR_ALL } from "../actions/type";

export function changeDepartment(payload) {
  return {
    type: CHANGE_DEPARTMENT,
    payload
  }
}

export function changeEmployee(payload) {
  return {
    type: CHANGE_EMPLOYEE,
    payload
  }
}

export function clearAll() {
  return {
    type: CLEAR_ALL
  }
}