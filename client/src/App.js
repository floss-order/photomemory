import React, { useState } from 'react'

import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PhotoSelection from './pages/PhotoSelection'

import { Switch, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Container>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/photo-selection" component={PhotoSelection} />
        </Switch>
        <Footer/>
      </Container>
    </>
  )
}

export default App
