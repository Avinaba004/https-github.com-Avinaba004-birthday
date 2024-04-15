import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NextPage from './components/NextPage';
import Question from './components/Question';
import Next from './components/Next';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<HomePage />} />
      <Route path="/next-page" element={<NextPage/>} />
      <Route path="/question" element={<Question/>} />
      <Route path="/next" element={<Next/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;