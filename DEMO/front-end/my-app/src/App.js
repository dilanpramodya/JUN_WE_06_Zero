import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from './components/add.jsx'; // Import your Student component
import UpdatePost from './components/update.jsx'; // Import your Student component
import Student from './components/workoutplan.jsx'; // Import your About component
import Workoutplan from './components/workoutplan.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Workoutplan />} /> {/* Home route */}
        <Route path="/post" element={<AddPost />} /> {/* Add Student route */}
        <Route path="/editpost/:studentId" element={<UpdatePost />} /> {/* Corrected route for editing students */}
        {/* Add more routes for other pages here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
