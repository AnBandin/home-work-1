import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {posts} from '../data';
import {Link} from 'react-router-dom';

export const Home = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {posts.map((obj) => (
        <Col key={obj.id}>
          <Card>
            <Card.Img variant="top" src={obj.imageUrl} />
            <Card.Body>
              <Link to={'/post/' + obj.id}>
                <Card.Title>{obj.title}</Card.Title>
              </Link>
              <Card.Text>{obj.text.substring(0, 100)} ...</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
