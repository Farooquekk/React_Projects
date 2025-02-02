
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './component/Home'
import Room from './component/Room'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/room/:roomId' element={ <Room/>}></Route>
      </Routes>
     
    </>
  )
}

export default App
