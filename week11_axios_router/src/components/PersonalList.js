import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, Card, Col, Row } from 'react-bootstrap';

class PersonList extends Component {
  // Define state default values
  state = {
    persons: []
  };

  // Component Lifecycle Callback
  componentDidMount() {
    // Fetch data from the API
    axios
      .get(`https://randomuser.me/api/?results=10`)
      .then((res) => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }

  render() {
    const { persons } = this.state;

    return (
      <div className="container mt-5">
        <h2>List of Persons</h2>
        <Row>
          {persons.map((person, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={person.picture.large} />
                <Card.Body>
                  <Card.Title>
                    {person.name.first} {person.name.last}
                  </Card.Title>
                  <Card.Text>
                    <strong>Email:</strong> {person.email}
                  </Card.Text>
                  <Card.Text>
                    <strong>Location:</strong> {person.location.city}, {person.location.country}
                  </Card.Text>
                  <Card.Text>
                    <strong>Phone:</strong> {person.phone}
                  </Card.Text>
                  <Card.Text>
                    <strong>Gender:</strong> {person.gender}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default PersonList;
