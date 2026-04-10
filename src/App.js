import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuestionComponent from './components/question/QuestionComponent';

function App() {
  return (
    <Router>
      <div>
        <Home />

        {/* TODO: Replace this placeholder with Routes 
            connect your question components to the router here */}
        <Routes>
          <Route path="/question1" element={<QuestionComponent />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;