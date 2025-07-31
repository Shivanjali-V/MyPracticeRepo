import React from "react";
import EmployeeCard from "./EmployeeCard";

const employees = [
  { id: 1, name: "John Doe", role: "Developer" },
  { id: 2, name: "Jane Smith", role: "Designer" },
  { id: 3, name: "Robert Brown", role: "Manager" }
];

function EmployeesList() {
  return (
    <div>
      <h2>Employees</h2>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} name={emp.name} role={emp.role} />
      ))}
    </div>
  );
}

export default EmployeesList;
