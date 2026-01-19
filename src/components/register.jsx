import React from "react";
import { useState} from "react"
import { useNavigate } from "react-router-dom";
function Register(){

    const navigate = useNavigate();
    const[formData, setFormData]=useState({
        name:"", gender:"",address:"",city:"",agree:false,
    
      });
       
      const handleChange =(e) => {
        const{name, value, type, checked}=e.target;
    
        setFormData({...formData, [name]: type === "checkbox" ? checked : value,})
      }
    
      const handleSubmit = (e)=>{
        e.preventDefault();
    
         if(!formData.agree){
          alert("please confirm that entered data is correct");
          return;
      }
       navigate("/result",{state:formData})}
                
      
    return(
    <>
<h2>Registration Page</h2>

    <form className="page" onSubmit={handleSubmit}>
     <div>
       <label>Name:</label><br/>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
       <div>
        <label>Gender:</label><br/>
      <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
      <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
      <input type="radio" name="gender" value="Others" onChange={handleChange} /> Others
       </div>
      <div>
        <label>Address:</label><br/>
      <textarea  name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>City:</label><br/>
      <select  name="city" value={formData.city} onChange={handleChange} required>
        <option value="">Select city</option>
        <option value="Banglore">Banglore</option>
        <option value="Chennai">Chennai</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>
      </div>
      <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange}  />
      <label>I confirm that entered data is correct</label>
      <br/>
       <button type="submit">Submit</button>
    </form>
    </>
)}

export default Register