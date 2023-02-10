import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import AllClassPage from '../AllClassPage/AllClassPage';
import HomePage from '../HomePage/HomePage';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <div className="page-container">
        <div className="content-wrap">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/classes" element={<AllClassPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
      </div>
      <Footer />
      </div>
    </main>
  );
}