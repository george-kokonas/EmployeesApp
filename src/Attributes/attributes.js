import { useEffect, useState } from "react";
import records from "../records.json";
function Attributes() {
  const [data, setData] = useState([]);

  console.log(Object.entries(data));
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
            <ul>
              <div>{Object.keys(Object.assign({}, ...records.employees))}</div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attributes;
