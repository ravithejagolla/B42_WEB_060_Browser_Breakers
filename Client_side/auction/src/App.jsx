

import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import SignUp from './Authentication/Signup'
import Login from './Authentication/Login'
import  Sidebar from './Components/sidebar'

function App() {


  return (
    <>
  
      <Routes>
      <Route path="/" element={<Sidebar/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}
 
export default App
