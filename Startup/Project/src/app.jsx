import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Login } from './login/login';
import { Calendar } from './calendar/calendar.jsx';
import { Contact } from './contact/contact';
import { CreateAccount } from './createAccount/createAccount';
import { Record } from './record/record.jsx';
import { SelfRecord } from './selfRecord/selfRecord';

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }

export default function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <header className="container-fluid">
            <nav className="navbar">
                <a className="navbar-brand" href="#"><h1>Gym Time</h1></a>
                <menu className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="">Sign in</NavLink></li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="calendar">Calendar</NavLink></li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="record">Social</NavLink></li>
                <li className="nav-it">
                    <NavLink className="nav-link" to="Contact">Contact</NavLink></li>
                </menu>
            </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/record' element={<Record />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/selfRecord' element={<SelfRecord />} />
                <Route path='/createAccount' element={<CreateAccount />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            
                
            <footer className="footer text-center">
            <div className="container-fluid">
                <span className="text-reset">Author Name(s)</span>
                <a
                className="text-reset"
                href="https://github.com/Mikeyballard40/DevEnvironment/tree/main/Startup"
                >Source</a>
            </div>
            </footer>
    </div>
  </BrowserRouter>
  )
}