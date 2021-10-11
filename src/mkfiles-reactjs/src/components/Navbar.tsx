import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

export default class MkfilesNavbar extends React.Component {
  handleClick(e: React.MouseEvent) {
    // console.log(e.target.href);
    let anchorEl = e.target as HTMLAnchorElement;
    console.log(anchorEl.hash);
    

  }
  render() {
    return (
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container className="justify-content-between">
          <Navbar.Brand>MKFILES</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" onClick={(e: React.MouseEvent) => (this.handleClick(e))}>home</Nav.Link>
            <Nav.Link href="#agentparams">agent params</Nav.Link>
            <Nav.Link href="#paramstorage">param storage</Nav.Link>
            <Nav.Link href="#sceneparams">scene params</Nav.Link>
            <Nav.Link href="#marmosets">marmosets</Nav.Link>
            <Nav.Link href="#dailydata">daily data</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
