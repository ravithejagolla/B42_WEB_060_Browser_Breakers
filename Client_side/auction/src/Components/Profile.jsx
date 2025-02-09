
  // Fetch patient
  const fetchPatientByEmail = async (email) => {
    try {
      const response = await axios.get(`http://localhost:8001/api/patients/email/${email}`);
      setSelectedPatient(response.data); // Store patient data
      setLoading(false);

      
      if (response.data) {
        setName(response.data.name || '');
        setAge(response.data.age || '');
        setPhone(response.data.phone || '');
        setMedicalConditions(response.data.medicalConditions || '');
      }
    } catch (err) {
      console.error('Error fetching patient:', err);
      setLoading(false);
    }
  };
 
  // Handle form submission (add or update patient)

    </>
  );
};

export default PatientForm;
