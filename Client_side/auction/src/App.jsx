

import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import SignUp from './Authentication/Signup'
import Login from './Authentication/Login'
import  Sidebar from './Components/sidebar'
import PatientForm from './Components/Profile'

function App() {


  return (
    <>

<BrowserRouter>
      <Routes>
      <Route path="/" element={<Sidebar/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PatientForm />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
 
export default App
