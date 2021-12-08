// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Alert} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default class FirstComponent extends React.Component <{}> {
  
  
  
  render() {
    return (
      <>
        <h1>HELLO</h1>
        <Alert dismissible variant="danger">
          <Alert.Heading>Oh shit!</Alert.Heading>
          <p>
            Get it right buddy.
            <Button>
              CLICK HERE
            </Button>
          </p>
        </Alert>
      </>
    )
  }
}