import React from 'react';
import Home from './pages/Home';
import QuestionComponent from './components/question/QuestionComponent';

function App() {
  return (
    <div>
      <Home />

      {/* TODO: Replace this placeholder with Routes */
      //connect your question components to the router here, for example:
      <Route path="/question1" element={<QuestionComponent />} />

      }
    </div>
  );
}

export default App;
