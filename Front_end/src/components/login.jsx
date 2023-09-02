import { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
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
        axios.post("http://localhost:5174/login", values)
        .then((res) => {
            const status = res.data
            if (status === "Success") {
                navigate("/home");
            } else {
                alert("Wrong Username or Password")
            }
        })
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
                    <button className='btn btn-primary border w-100'>Login</button>
                    <p className='text-center'>Don't have an account? Register Now!</p>
                    <Link to="/register" className='btn btn-default border w-100' >Register</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;