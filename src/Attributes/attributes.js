import { useEffect, useState } from "react";

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
              {Object.entries(data).map((key) => (
                <p>{}</p>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attributes;
