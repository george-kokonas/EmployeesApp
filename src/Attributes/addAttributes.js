import { useState, useEffect } from "react";
import records from "../records.json";
import { Link, useNavigate } from "react-router-dom";
function AddAttributes() {
  const navigate = useNavigate();
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [birth, setBirth] = useState("");
  // const [address, setAddress] = useState("");

  // const [long, setLong] = useState("");
  // const [lat, setLat] = useState("");
  // const [license, setLicense] = useState("YES");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const attributesdata = {
    //   id,
    //   name,
    //   birth,
    //   address,
    //   long,
    //   lat,
    //   license,
    // };
    fetch("http://localhost:8000/attributes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => {
        alert("Saved successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "start" }}></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAttributes;
