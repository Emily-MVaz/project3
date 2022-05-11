import React  from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './pages/Main';
import Resources from './pages/Resources';
import SingleResource from './pages/SingleResource';
import Community from './pages/Community';
import CreatePost from './pages/CreatePost';
import Contact from './components/Contact';
import About from './pages/About';
import Profile from './pages/Profile';
import './css/app.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default function App() {


  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/:id" element={<SingleResource />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/newpost" element={<CreatePost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
      </Router>
    </div>
  )
}
