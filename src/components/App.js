import React from 'react';
import Header from './Header/Header';
import ReviewForm from './Reviews/ReviewForm'


class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <ReviewForm />
      </React.Fragment>
    );
  }
  
}

export default App;
