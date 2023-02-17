import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import AllClassDaysPage from '../AllClassDaysPage/AllClassDaysPage';
import HomePage from '../HomePage/HomePage';
import Footer from '../../components/Footer/Footer';
import NewClassPage from '../NewClassPage/NewClassPage';
import ClassDetailsPage from '../ClassDetailsPage/ClassDetailsPage';
import EditClassPage from '../EditClassPage/EditClassPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  // const [data, setData] = useState(seedData)
  const [newClassDay, setNewClassDay] = useState("")
  const [classDay, setClassDay] = useState("")

  function addClassDay(classDay){
  setNewClassDay([...classDay, classDay])
  }

  return (
    <main className="App">
      <div className="page-container">
        <div className="content-wrap">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/classDays" element={<AllClassDaysPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/newClass" element={<NewClassPage user={user} />} />
            <Route path="/classDays/:id" element={<ClassDetailsPage user={user} />} />
            <Route path="/classDays/:id/edit" element={<EditClassPage user={user} />} />
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