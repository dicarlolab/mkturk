import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchFirestoreCollection } from '../features/data/dataSlice';

function MkfilesNavbar() {
  const dispatch = useAppDispatch();

  function handleClick(location: string) {
    console.log('HI FROM NAVBAR:', location);
    if (location.includes('firestore')) {
      let collectionId = location.split('/')[1];
      dispatch(fetchFirestoreCollection(collectionId));
    }
  }

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container className="justify-content-between">
        <Navbar.Brand>MKFILES</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={(e: React.MouseEvent) => handleClick('home')}>
            home
          </Nav.Link>
          <Nav.Link href="#agentparams">agent params</Nav.Link>
          <Nav.Link href="#paramstorage">param storage</Nav.Link>
          <Nav.Link href="#sceneparams">scene params</Nav.Link>
          <Nav.Link
            onClick={(e: React.MouseEvent) =>
              handleClick('firestore/marmosets')
            }
          >
            marmosets
          </Nav.Link>
          <Nav.Link href="#dailydata">daily data</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MkfilesNavbar;
