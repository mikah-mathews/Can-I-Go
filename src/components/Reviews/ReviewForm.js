import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function ReviewForm(props) {

  function handleNewReviewFormSubmission(event) {
    event.preventDefault();
    console.log("The form was submitted");
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleNewReviewFormSubmission}>
        <h2>Add New Review</h2> <br />
        <h6>Overall Rating</h6>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="1 Star"
              name="overallRating"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="2 Star"
              name="overallRating"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="3 Star"
              name="overallRating"
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="4 Star"
              name="overallRating"
              type={type}
              id={`inline-${type}-4`}
            />
            <Form.Check
              inline
              label="5 Star"
              name="overallRating"
              type={type}
              id={`inline-${type}-5`}
            />
          </div>
        ))}    
        <h6>Physical Accessibility</h6>  
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="1 Star"
              name="physicalAccessibility"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="2 Star"
              name="physicalAccessibility"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="3 Star"
              name="physicalAccessibility"
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="4 Star"
              name="physicalAccessibility"
              type={type}
              id={`inline-${type}-4`}
            />
            <Form.Check
              inline
              label="5 Star"
              name="physicalAccessibility"
              type={type}
              id={`inline-${type}-5`}
            />
          </div>
        ))}  
        <h6>Sensory Accessibility</h6>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="1 Star"
              name="sensoryAccessibility"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="2 Star"
              name="sensoryAccessibility"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="3 Star"
              name="sensoryAccessibility"
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="4 Star"
              name="sensoryAccessibility"
              type={type}
              id={`inline-${type}-4`}
            />
            <Form.Check
              inline
              label="5 Star"
              name="sensoryAccessibility"
              type={type}
              id={`inline-${type}-5`}
            />
          </div>
        ))}
        <h6>Cleanliness</h6>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="1 Star"
              name="cleanliness"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="2 Star"
              name="cleanliness"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="3 Star"
              name="cleanliness"
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="4 Star"
              name="cleanliness"
              type={type}
              id={`inline-${type}-4`}
            />
            <Form.Check
              inline
              label="5 Star"
              name="cleanliness"
              type={type}
              id={`inline-${type}-5`}
            />
          </div>
        ))}
        <h6>Ease of Use and Access</h6>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="1 Star"
              name="easeOfUse"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="2 Star"
              name="easeOfUse"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="3 Star"
              name="easeOfUse"
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="4 Star"
              name="ceaseOfUse"
              type={type}
              id={`inline-${type}-4`}
            />
            <Form.Check
              inline
              label="5 Star"
              name="easeOfUse"
              type={type}
              id={`inline-${type}-5`}
            />
          </div>
        ))}
        <Form.Control
          as='textarea'
          rows={4}
          name='description'
          placeholder='Write a detailed review'
          className="mb-3 shadow-sm" 
          required="required"/>
          <Button variant="dark" size="sm" type="submit" className="px-4 rounded-pill shadow-sm">Submit Review</Button>
      </Form>
    </React.Fragment>
  );
}

export default ReviewForm;