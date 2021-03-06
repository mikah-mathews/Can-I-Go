import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import firebase from 'firebase/compat/app';
import { useFirestore } from 'react'

class ReviewForm extends React.Component {
  constructor() {
    super();
    this.state = {
      businessName: "",
      overallRating: 0,
      physicalAccessibility: 0,
      sensoryAccessibility: 0,
      cleanliness: 0,
      easeOfUse: 0,
      writtenReview: ""
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addReview = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const reviewRef = db.collection("reviews").add({
      businessName: this.state.businessName,
      overallRating: this.state.overallRating,
      physicalAccessibility: this.state.physicalAccessibility,
      sensoryAccessibility: this.state.sensoryAccessibility,
      cleanliness: this.state.cleanliness,
      easeOfUse: this.state.easeOfUse,
      writtenReview: this.state.writtenReview
    }); 
    this.setState({
      businessName: "",
      overallRating: 0,
      physicalAccessibility: 0,
      sensoryAccessibility: 0,
      cleanliness: 0,
      easeOfUse: "",
      writtenReview: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.addReview}>
          <h2>Add New Review</h2> <br />
          <Form.Control
            as='textarea'
            name='businessName'
            placeholder='Name of Business'
            className="mb-3 shadow-sm" 
            required="required"
            onChange={this.updateInput}
            value={this.state.businessName}
            />
          <h6>Overall Rating</h6>
          <span className="star-cb-group">
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="1 Star"
                  name="overallRating"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={this.updateInput}
                  value={1}
                />
                <Form.Check
                  inline
                  label="2 Star"
                  name="overallRating"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={this.updateInput}
                  value={2}
                />
                <Form.Check
                  inline
                  label="3 Star"
                  name="overallRating"
                  type={type}
                  id={`inline-${type}-3`}
                  onChange={this.updateInput}
                  value={3}
                />
                <Form.Check
                  inline
                  label="4 Star"
                  name="overallRating"
                  type={type}
                  id={`inline-${type}-4`}
                  onChange={this.updateInput}
                  value={4}
                />
                <Form.Check
                  inline
                  label="5 Star"
                  name="overallRating"
                  type={type}
                  id={`inline-${type}-5`}
                  onChange={this.updateInput}
                  value={5}
                />
              </div>
            ))}
          </span>    
          <h6>Physical Accessibility</h6>
          <span className="star-cb-group"> 
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="1 Star"
                  name="physicalAccessibility"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={this.updateInput}
                  value={1}
                />
                <Form.Check
                  inline
                  label="2 Star"
                  name="physicalAccessibility"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={this.updateInput}
                  value={2}
                />
                <Form.Check
                  inline
                  label="3 Star"
                  name="physicalAccessibility"
                  type={type}
                  id={`inline-${type}-3`}
                  onChange={this.updateInput}
                  value={3}
                />
                <Form.Check
                  inline
                  label="4 Star"
                  name="physicalAccessibility"
                  type={type}
                  id={`inline-${type}-4`}
                  onChange={this.updateInput}
                  value={4}
                />
                <Form.Check
                  inline
                  label="5 Star"
                  name="physicalAccessibility"
                  type={type}
                  id={`inline-${type}-5`}
                  onChange={this.updateInput}
                  value={5}
                />
              </div>
            ))}
          </span>  
          <h6>Sensory Accessibility</h6>
          <span className="star-cb-group">
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="1 Star"
                  name="sensoryAccessibility"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={this.updateInput}
                  value={1}
                />
                <Form.Check
                  inline
                  label="2 Star"
                  name="sensoryAccessibility"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={this.updateInput}
                  value={2}
                />
                <Form.Check
                  inline
                  label="3 Star"
                  name="sensoryAccessibility"
                  type={type}
                  id={`inline-${type}-3`}
                  onChange={this.updateInput}
                  value={3}
                />
                <Form.Check
                  inline
                  label="4 Star"
                  name="sensoryAccessibility"
                  type={type}
                  id={`inline-${type}-4`}
                  onChange={this.updateInput}
                  value={4}
                />
                <Form.Check
                  inline
                  label="5 Star"
                  name="sensoryAccessibility"
                  type={type}
                  id={`inline-${type}-5`}
                  onChange={this.updateInput}
                  value={5}
                />
              </div>
            ))}
          </span>
          <h6>Cleanliness</h6>
          <span className="star-cb-group">
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="1 Star"
                  name="cleanliness"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={this.updateInput}
                  value={1}
                />
                <Form.Check
                  inline
                  label="2 Star"
                  name="cleanliness"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={this.updateInput}
                  value={2}
                />
                <Form.Check
                  inline
                  label="3 Star"
                  name="cleanliness"
                  type={type}
                  id={`inline-${type}-3`}
                  onChange={this.updateInput}
                  value={3}
                />
                <Form.Check
                  inline
                  label="4 Star"
                  name="cleanliness"
                  type={type}
                  id={`inline-${type}-4`}
                  onChange={this.updateInput}
                  value={4}
                />
                <Form.Check
                  inline
                  label="5 Star"
                  name="cleanliness"
                  type={type}
                  id={`inline-${type}-5`}
                  onChange={this.updateInput}
                  value={5}
                />
              </div>
            ))}
          </span>
          <h6>Ease of Use and Access</h6>
          <span className="star-cb-group">
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="1 Star"
                  name="easeOfUse"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={this.updateInput}
                  value={1}
                />
                <Form.Check
                  inline
                  label="2 Star"
                  name="easeOfUse"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={this.updateInput}
                  value={2}
                />
                <Form.Check
                  inline
                  label="3 Star"
                  name="easeOfUse"
                  type={type}
                  id={`inline-${type}-3`}
                  onChange={this.updateInput}
                  value={3}
                />
                <Form.Check
                  inline
                  label="4 Star"
                  name="ceaseOfUse"
                  type={type}
                  id={`inline-${type}-4`}
                  onChange={this.updateInput}
                  value={4}
                />
                <Form.Check
                  inline
                  label="5 Star"
                  name="easeOfUse"
                  type={type}
                  id={`inline-${type}-5`}
                  onChange={this.updateInput}
                  value={5}
                />
              </div>
            ))}
          </span>
          <Form.Control
            as='textarea'
            rows={4}
            name='writtenReview'
            placeholder='Write a detailed review'
            className="mb-3 shadow-sm" 
            required="required"
            onChange={this.updateInput}
            value={this.state.writtenReview}
            />
            <Button variant="dark" size="sm" type="submit" className="px-4 rounded-pill shadow-sm">Submit Review</Button>
        </Form>
      </React.Fragment>  
    );
  }
}

export default ReviewForm;