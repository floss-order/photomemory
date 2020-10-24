import React from 'react'

import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Switch>
        <Container>
          <Header/>
          <Route exact path="/">
            <Home />
          </Route>
          <Footer/>
        </Container>
      </Switch>
    </>
  )
}

export default App
