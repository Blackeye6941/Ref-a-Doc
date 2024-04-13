import React from 'react'
import Hero from '../components/Hero'
import { useState } from 'react'
import Doctor from './dashboards/Doctor';

const Home = () => {
  const[loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    //syntax for checking login
    setLoggedIn(true);
  }
  return (
    <>
    <Doctor/>
    </>
  )
}

export default Home
