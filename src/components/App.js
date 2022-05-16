import React from 'react';
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import Header from "./Header/Header";
import ReviewForm from "./Reviews/ReviewForm";
import Home from "./Home/Home";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/review/new" element={<ReviewForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
  
}

export default App;
