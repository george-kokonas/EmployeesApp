import { useState, useEffect } from "react";
import records from "../records.json";

function EditAttributes() {
  const [data, setData] = useState([]);
  const attributes = Object.keys(records.employees[0]);
  function handleDeleteAttribute(id) {
    const confirm = window.confirm("Do you like to Delete?");
    if (confirm) {
      fetch("http://localhost:8000/attributes" + id, { method: "DELETE" })
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
    fetch("http://localhost:8000/attributes")
      .then((res) => {
        return res.json();
      })
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      {" "}
      <button
        className="text-decoration-none btn btn-sm btn-danger "
        onClick={(e) => handleDeleteAttribute(attributes.id)}
      >
        Delete
      </button>
    </>
  );
}

export default EditAttributes;
