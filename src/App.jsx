import React from 'react'
import './App.css'
import Header from './component/Header/Header'
import Content from './component/Content/Content'
import Accordion from './component/Accordion/Accordion'

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <main>
        <Content></Content>
        <Accordion></Accordion>
      </main>
    </div>
  )
}

export default App
