import { useState } from 'react'
import Welcome from './Welcome'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Skills from './Skills'
import Home from './Pages/Home'
import About from './Pages/About'   
import Services from './Pages/Services' 
import Navbar from './Components/Navbar'
import State from './Hooks/State'
import Form from './Hooks/Form'
import Reducer from './Hooks/Reducer'
import Effect from './Hooks/Effect'

function App() {
  
  return (
<>
  <Navbar />
  <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/services' element={<Services />}/>
  <Route path='/state' element={<State />}/>
  <Route path='/form' element={<Form />}/>
  <Route path='/effect' element={<Effect />}/> 
  <Route path='/reducer' element={<Reducer />}/>
 

  </Routes>
  
  <Skills skill={['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript']} />
   <h1>Welcome</h1>

 </>
  )
}

export default App
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

//rafce