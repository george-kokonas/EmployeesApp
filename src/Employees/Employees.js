import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Employees() {
  const [data, setData] = useState([]);

  function handleDelete(id) {
    const confirm = window.confirm("Do you like to Delete?");
    if (confirm) {
      fetch("http://localhost:8000/employees/" + id, { method: "DELETE" })
        .then((res) => {
          alert("Record Deleted");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  useEffect(() => {
    fetch("http://localhost:8000/employees")
      .then((res) => {
        return res.json();
      })
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>List of employees</h2>
        </div>
        <div className="card-body">
          {" "}
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>location</th>

                <th>Drivers License</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.birth}</td>
                    <td>{item.address}</td>

                    <td>{item.license}</td>

                    <td>
                      <Link
                        className="text-decoration-none btn btn-sm btn-success "
                        to={`/employee/edit/${item.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="text-decoration-none btn btn-sm btn-danger "
                        onClick={(e) => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}{" "}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="employee/create">Add an employee (+)</Link>
    </div>
  );
}

export default Employees;
