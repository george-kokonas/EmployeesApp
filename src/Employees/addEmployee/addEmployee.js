import React, { useState, useEffect } from "react";
import "./addEmployee.css";
import { Link, useNavigate } from "react-router-dom";
import Longlat from "./longlat";
function AddEmployee() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");

  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [license, setLicense] = useState("YES");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const employeedata = {
      id,
      name,
      birth,
      address,
      long,
      lat,

      license,
    };

    fetch("http://localhost:8000/employees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(employeedata),
    })
      .then((res) => {
        alert("Saved successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    const regexddmmyyyy =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    let matches = regexddmmyyyy.test(birth);
    if (matches) {
      if (new Date(birth) < today) {
        setValidation(true);
      } else {
        setValidation(false);
      }
    }
  }, [birth]);
  const handleChanged = (e) => {
    setBirth(e.target.value);
  };
  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "start" }}>
              <div className="card-title">
                <h2>Create Employee</h2>
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
                          onChange={(e) => setName(e.target.value)}
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
                      <div>
                        <label htmlFor="yr">Birth Date</label>
                        <input
                          required
                          value={birth}
                          onChange={handleChanged}
                          className="form-control"
                          type="text"
                          id="date"
                          placeholder="e.g. 23/09/1994"
                        />

                        {validation ? (
                          <p>Valid Date</p>
                        ) : (
                          <p className="text-danger">*Invalid Date</p>
                        )}
                      </div>
                      <Longlat />
                      <label htmlFor="address"></label>
                      <input
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        type="text"
                        id="address"
                        placeholder="Address"
                      />

                      <input
                        required
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        className="form-control"
                        type="number"
                        id="latitude"
                        placeholder="Latitude"
                      />
                      <input
                        required
                        value={long}
                        onChange={(e) => setLong(e.target.value)}
                        className="form-control"
                        type="number"
                        id="longtitude"
                        placeholder="Longtitude"
                      />
                      <hr />
                      <div className="m-3">
                        <label className="form-check-label">Has License</label>
                        <select
                          className="custom-select"
                          value={license}
                          onChange={(e) => {
                            const selectedOption = e.target.value;
                            setLicense(selectedOption);
                          }}
                        >
                          <option value="yes">YES</option>
                          <option value="no">NO</option>
                        </select>
                      </div>
                    </div>{" "}
                    <button className="btn btn-success" type="submit" id="btn">
                      Save
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

export default AddEmployee;
