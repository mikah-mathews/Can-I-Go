import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Review from './Review';

function ReviewList(props) {
  useFirestoreConnect([
    {collection: 'reviews'}
  ]);

  const reviews = useSelector(state => state.firestore.ordered.reviews);

  if(isLoaded(reviews)) {
    return (
      <React.Fragment>
        <hr />
        {reviews.map((review) => {
          return <Review
          businessName={review.businessName}
          overallRating={review.overallRating}
          physicalAccessibility={review.physicalAccessibility}
          sensoryAccessibility={review.sensoryAccessibility}
          cleanliness={review.cleanliness}
          easeOfUse={review.easeOfUse}
          writtenReview={review.writtenReview} />

        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default ReviewList;





