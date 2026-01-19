import React from "react"
import { useLocation,useNavigate } from "react-router-dom"
function Result() {

    const navigate=useNavigate();
    const location = useLocation();

     const formData = location.state;

  if (!formData) {
    return <h3>No data found. Please submit the form.</h3>;
  }

return(
    <>
          <h2>Submitted Details</h2>
            <div className="page">
            <p><b>Name:</b> {formData.name}</p>
            <p><b>Gender:</b> {formData.gender}</p>
            <p><b>Address:</b> {formData.address}</p>
            <p><b>City:</b> {formData.city}</p>

            <button onClick={() => navigate("/register")}>Back</button>
            </div>
         
        </>

)
    
}

export default Result