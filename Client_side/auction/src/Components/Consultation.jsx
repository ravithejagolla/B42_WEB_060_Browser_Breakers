import React from "react";
import '../styling/Consultaion.css'
import HealthConsultation from "./Consaltaion_Part";
import { useNavigate } from 'react-router-dom';

const Consultaion = () => {

  const navigate = useNavigate()

function gotoForm(){
  navigate('/CallForm')
}


  return (
    <div className="Consultaionlpage">
    <div className="home_container">
      <h1>Skip the travel!<br/>
      Take Online Doctor Consultation
      <button onClick={gotoForm}> Consult Now</button> 
      <p>
     
 🎖️Verified Doctors  🗒️Digital Prescription ⭐Free Followup
      </p>  </h1> 
      
        <div className="content-pic">
      </div>


      </div>
 <HealthConsultation/>

    </div>
  );
};

export default Consultaion;