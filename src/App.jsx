import { useState } from 'react'
import Greet from './components/Greet'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import './App.css'
import Props from './components/Props'
import State from './components/State'




function App() {

  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Hello /> */}



      {/* The below mentioned method is applicable for class based components props */}
      {/* <Welcome name='Hammad' />
      <Welcome name='Ziyan' />
      <Welcome name='Erdum' /> */}


      {/* Example of Props */}
      {/* <Props name='Hammad'><p>This is a children</p></Props> */}
      {/* The above method is only applicable if you dont know what exactly is going to be passed in props */}
      {/* <Props name='Erdum' />
      <Props name='Hamza' /> */}


      {/* Example of States in class based components see the component */}
      <State />
    </div>
  )
}

export default App
