// import EditAttributes from "../Attributes/editAttributes";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import records from "../records.json";

function Attributes() {
  const [data, setData] = useState([]);
  console.log(Array.isArray(data));
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
              <thead>
                {data.length > 0 && (
                  <tr>
                    <th></th>
                    {Object.keys(data[0]).map((item) => {
                      return (
                        <>
                          <td key={item}>{item}</td>
                          <td>
                            <button
                              className="text-decoration-none btn btn-sm btn-danger "
                              onClick={(e) => handleDeleteAttribute(item)}
                            >
                              Delete
                            </button>
                          </td>
                        </>
                      );
                    })}
                  </tr>
                )}
              </thead>
              {/* <tbody>
                {}
                {Object.keys(data[0]).map((item, index) => (
                  <tr key={index}>
                    {" "}
                    <td>{item}</td>
                    <td>
                     
                    </td>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
          <Link to="/create">Add an attribute (+)</Link>
        </div>
      </div>
    </>
  );
}

export default Attributes;
