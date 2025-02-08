import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignUp from './Authentication/Signup';
import Login from './Authentication/Login';
import Sidebar from './Components/Sidebar';
import PatientForm from './Components/Profile';
import { Home } from 'lucide-react';
import Footer from './Components/Footer';

function Layout() {
  const location = useLocation();
  const hideSidebarPaths = ["/login", "/signup"];
  
  return (
    <>
      {!hideSidebarPaths.includes(location.pathname) && <Sidebar />}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PatientForm />} />
      </Routes>
      <Footer/>
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
