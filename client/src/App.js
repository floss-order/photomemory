import React from 'react'

import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PhotoSelection from './pages/PhotoSelection'
import Editor from './pages/Editor'

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
          <Route path="/editor" component={Editor} />
        </Switch>
        <Footer/>
      </Container>
    </>
  )
}

export default App
