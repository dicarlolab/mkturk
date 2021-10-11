import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import MkFinder from './Mkfinder';
import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row className="mb-3">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>QUERY BOX</Card.Title>
                <Card.Text>
                  This is where the query box will be located
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>TABULATOR</Card.Title>
                <MkFinder />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>MKMEDIA</Card.Title>
                <Card.Text>
                  All media associated files will be viewable HERE
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
