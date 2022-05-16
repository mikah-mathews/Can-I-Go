import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function ReviewForm(props) {

  function handleNewReviewFormSubmission(event) {
    event.preventDefault();
    props.onNewReviewCreation()
  }

  return (
    <React.Fragment>
      <Form>

      </Form>
    </React.Fragment>
  );
}

export default ReviewForm;