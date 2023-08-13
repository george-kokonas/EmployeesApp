// import EditAttributes from "../Attributes/editAttributes";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import records from "../records.json";

function Attributes() {
  const [data, setData] = useState([]);
  console.log(records.employees[0]);
  function handleDeleteAttribute(id) {
    const confirm = window.confirm("Do you like to Delete?");
    if (confirm) {
      fetch("http://localhost:8000/employees/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Attribute deleted");
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
    <>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2>List of attributes</h2>

            <table id="attributes" style={{ width: "100%" }}>
              <tbody>
                {}
                {data.employees.map((item, index) => (
                  <tr key={index}>
                    {" "}
                    <td>{item}</td>
                    <td>
                      <button
                        className="text-decoration-none btn btn-sm btn-danger "
                        onClick={(e) => handleDeleteAttribute(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/create">Add an attribute (+)</Link>
        </div>
      </div>
    </>
  );
}

export default Attributes;
