import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignUp from './Authentication/Signup';
import Login from './Authentication/Login';
import Sidebar from './Components/Sidebar';
import PatientForm from './Components/Profile';
import Consultaion from './Components/Consultation';
import Adoption from './Components/Adoption';
// import { Home } from 'lucide-react';
import Home from './Components/Home';
import CallForm from './Components/CallForm';


function Layout() {
  const location = useLocation();
  const hideSidebarPaths = ["/login", "/signup"];

  return (
    <>
      {!hideSidebarPaths.includes(location.pathname) && <Sidebar />}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Consultation" element={<Consultaion />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PatientForm />} />
        <Route path="/Routine" element={<Adoption />} />
        <Route path="/CallForm" element={<CallForm />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
