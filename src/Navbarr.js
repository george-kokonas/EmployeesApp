import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbarr() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>EmployeesApp</Navbar.Brand>

          <Link to="/attributes">Attributes</Link>
          <Link to="/">Employees</Link>
          <Link to="/map">Map</Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
