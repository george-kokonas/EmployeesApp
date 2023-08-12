import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Longlat from "../addEmployee/longlat";
function EditEmployee() {
  const { empid } = useParams();

  // const [data, employeeData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/employees/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setIdChange(res.id);
        setLicenseChange(res.license);
        setNameChange(res.name);
        setBirthChange(res.birth);
        setAddressChange(res.address);
        setLongChange(res.long);
        setLatChange(res.lat);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [license, setLicenseChange] = useState(true);
  const [id, setIdChange] = useState("");
  const [name, setNameChange] = useState("");
  const [birth, setBirthChange] = useState("");
  const [address, setAddressChange] = useState("");
  const [long, setLongChange] = useState("");
  const [lat, setLatChange] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const employeedata = { id, name, birth, address, long, lat, license };

    fetch("http://localhost:8000/employee/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(employeedata),
    })
      .then((res) => {
        alert("Edit successful");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "start" }}>
              <div className="card-title">
                <h2>Edit Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col=lg-12">
                    <div className="form-group">
                      <label htmlFor="title">ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                        type="text"
                        id="title"
                        placeholder="ID"
                      />
                      <div className="form-group">
                        <label htmlFor="title">Name</label>
                        <input
                          required
                          value={name}
                          onChange={(e) => setNameChange(e.target.value)}
                          onMouseDown={(e) => setValidation(true)}
                          className="form-control"
                          type="text"
                          id="title"
                          placeholder="Name"
                        />
                        {name.length < 3 && validation && (
                          <span className="text-danger">
                            *Name must be at least 3 characters
                          </span>
                        )}
                      </div>

                      <label htmlFor="yr">Birth Date</label>
                      <input
                        required
                        value={birth}
                        onChange={(e) => setBirthChange(e.target.value)}
                        className="form-control"
                        type="date"
                        id="date"
                        placeholder="Date of Birth"
                      />
                      <Longlat />
                      <label htmlFor="address">Address</label>
                      <input
                        required
                        value={address}
                        onChange={(e) => setAddressChange(e.target.value)}
                        className="form-control"
                        type="text"
                        id="address"
                        placeholder="Address"
                      />
                      <input
                        required
                        value={lat}
                        onChange={(e) => setLatChange(e.target.value)}
                        className="form-control"
                        type="number"
                        id="latitude"
                        placeholder="Latitude"
                      />
                      <input
                        required
                        value={long}
                        onChange={(e) => setLongChange(e.target.value)}
                        className="form-control"
                        type="number"
                        id="longtitude"
                        placeholder="Longtitude"
                      />
                      <hr />
                      <div className="m-3">
                        <label className="form-check-label">
                          Drivers License{" "}
                        </label>
                        <input
                          checked={license}
                          onChange={(e) => setLicenseChange(e.target.checked)}
                          className="form-check-input"
                          type="checkbox"
                        />
                      </div>
                    </div>{" "}
                    <button className="btn btn-success" type="submit" id="btn">
                      Edit and Save
                    </button>
                    <Link to="/" className="btn btn-danger">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditEmployee;
