import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { PropTypes } from 'prop-types';



function Review(props) {
  return (
    <React.Fragment>
      <ListGroup.Item className="mb-3 border shadow-sm">
        <Row>
          <Col md={8} className="pt-2 pb-2 position-relative">
            <h4 className="fw-normal border-bottom pb-1">{props.businessName}</h4>
            <p>Overall Rating: {props.overallRating} stars</p><br />
            <p>Physical Accessibility: {props.physicalAccessibility} stars</p><br />
            <p>Sensory Accessibility: {props.sensoryAccessibility} stars</p><br />
            <p>Cleanliness: {props.cleanliness} stars</p> <br />
            <p>Ease of Use: {props.easeOfUse} stars</p> <br />
            <h6>{props.writtenReview}</h6>
            <Button variant="dark" size="sm" className="px-4 rounded-pill shadow-sm">Edit</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </React.Fragment>
  );
}

Review.propTypes = {
  overallRating: PropTypes.number.isRequired,
  businessName: PropTypes.string.isRequired,
  physicalAccessibility: PropTypes.number.isRequired,
  sensoryAccessibility: PropTypes.number.isRequired,
  cleanliness: PropTypes.number.isRequired,
  easeOfUse: PropTypes.number.isRequired,
  writtenReview: PropTypes.string
}


export default Review;