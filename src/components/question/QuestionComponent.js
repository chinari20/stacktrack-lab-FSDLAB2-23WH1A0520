import React from 'react';

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';
import React, { useState, useEffect } from 'react';
import { get } from '../../api/client';

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  

  // TODO: Implement data fetching inside a useEffect hook
  useEffect(() => {
    if (search) {
      // Fetch data from the API based on the search keyword
      get(`/api/task?search=${search}`).then(response => {
        setData(response.data);
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  }, [search]);
  

  // TODO: Implement any event handlers required by your question set
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    // Update the URL query parameter
    const url = new URL(window.location);
    url.searchParams.set('search', event.target.value);
    window.history.pushState({}, '', url);
  };
  

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search tasks..."   />    
      <div>
        {data ? (
          <ul>
            {data.map(task => (
              <li key={task.id}>{task.title}: {task.description} (Status: {task.status})</li>
            ))}
          </ul>
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
  );
}

export default QuestionComponent;