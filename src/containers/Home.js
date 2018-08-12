import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { changeDepartment, changeEmployee, clearAll } from "../actions/header";
import { fetchEmployee } from "../actions/employee";
import Header from "../components/Header";
import EmployeeView from "../components/EmployeeView";

const Home = ({ employee, loading, ...props }) => {
  return (
    <Fabric>
      <Header {...props} />
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        employee && <EmployeeView employee={employee} />
      )}
    </Fabric>
  );
};

const mapStateToProps = ({
  header: { selectedDepartment, employees, selectedEmployee },
  employee: { employee, loading }
}) => ({ selectedDepartment, employees, selectedEmployee, employee, loading });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeDepartment,
      changeEmployee,
      fetchEmployee,
      clearAll
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
