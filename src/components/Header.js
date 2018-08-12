import React from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { departments } from "../util/data";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";

export default ({
  selectedDepartment,
  employees,
  selectedEmployee,
  changeDepartment,
  changeEmployee,
  fetchEmployee,
  clearAll
}) => {
  function getEmployee(e) {
    e.preventDefault();
    fetchEmployee(selectedEmployee);
  }
  return (
    <form className="ms-Grid" onSubmit={getEmployee} dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm6 ms-lg4">
          <Dropdown
            placeHolder="Select an Option"
            label="Departments:"
            options={departments}
            selectedKey={selectedDepartment}
            onChanged={(val)=>changeDepartment(val.key)}
          />
        </div>
        <div className="ms-Grid-col ms-sm6 ms-lg4">
          <Dropdown
            placeHolder="Select an Option"
            label="Employee id:"
            selectedKey={selectedEmployee}
            disabled={!employees.length}
            onChanged={(val)=>changeEmployee(val.key)}
            options={employees}
          />
        </div>
        <div className="ms-Grid-col ms-sm6 ms-lg2">
          <div className="mt-36">
            <DefaultButton
              type="submit"
              primary={true}
              text="GetDetails"
              disabled={!selectedEmployee}
            />
          </div>
        </div>
        <div className="ms-Grid-col ms-sm6 ms-lg2">
          <div className="mt-36">
            <DefaultButton
              text="Clear"
              disabled={!selectedDepartment}
              onClick={clearAll}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
