import records from "../records.json";
function Attributes() {
  let entries = Object.entries(records.employees);
  console.log(entries);
  const attributes = Object.keys(records.employees[0]);
  console.log(attributes);
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2>List of attributes</h2>
            {/* <ul>
              <div>{Object.keys(Object.assign({}, ...records.employees))}</div>
            </ul> */}
            <table id="attributes" style={{ width: "100%" }}>
              <tr>
                <th>{attributes[0]}</th>
                <th>{attributes[1]}</th>
                <th>{attributes[2]}</th>
                <th>{attributes[3]}</th>

                <th>{attributes[6]}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attributes;
