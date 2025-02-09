import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignUp from './Authentication/Signup';
import Login from './Authentication/Login';
import Sidebar from './Components/Sidebar';
import PatientForm from './Components/Profile';
<
  return (
    <>
      {!hideSidebarPaths.includes(location.pathname) && <Sidebar />}
      <Routes>

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
