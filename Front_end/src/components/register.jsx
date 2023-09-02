import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from "axios";

const Register = () => {
    const [values, setValues] = useState({
        username: "",
        password: ""
      })
    
      const handleInput = (e) => {
        setValues((prev) => 
          ({...prev, [e.target.name]: [e.target.value]})
       )
      }

      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        if (values.username === "" || values.password === "") {
          alert("Username & Password cannot be blanked");
        } else {
          axios.post("http://localhost:5174/register", values)
          .then((res) => {
            if (res.data === "Failed") {
              alert("Invalid: Username has already existed")
            } else {
              navigate('/');
              setTimeout(() => {
                  alert("You are now registered, you can now login.");
              },500);
            }
          })
        }
      }

      useEffect(() => {
        setValues({
            username: "",
            password: ""
        })
      },[])

      return (
        <div className="bg-primary d-flex justify-content-center align-items-center vh-100">
                <div className="bg-white rounded p-3 w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">Username:</label>
                        <input 
                        type="text" 
                        id='username'
                        className='form-control'
                        name='username'
                        onChange={handleInput}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password:</label>
                        <input 
                        type="password" 
                        id='password' 
                        className='form-control'
                        name='password'
                        onChange={handleInput}
                        />           
                    </div>
                    <p className='text-center'>Fill out the input areas first then click "Register"</p>
                    <button className='btn btn-success border w-100'>Register</button>
                </form>
                </div>
            </div>
      )
}

export default Register;