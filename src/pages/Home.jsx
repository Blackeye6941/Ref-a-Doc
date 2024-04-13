import React from 'react'
import Hero from '../components/Hero'
import { useState } from 'react'
import Doctors from './dashboards/Doctors';

const Home = () => {
  const[loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    //syntax for checking login
    setLoggedIn(true);
  }
  return (
    <>
    <Doctors/>
    </>
  )
}

export default Home
