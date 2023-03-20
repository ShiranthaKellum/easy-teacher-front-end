import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/login/Login';
import SignUp from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
