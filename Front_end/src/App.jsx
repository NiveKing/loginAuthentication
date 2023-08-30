import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white rounded p-5">
        <form action="">
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id='username' 
              onChange={(e) => setUser(e.target.value)} 
              className='form-control'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id='password' 
              onChange={(e) => setPassword(e.target.value)} 
              className='form-control'
            />           
          </div>
          <button className='btn btn-primary w-50'>Login</button>
          <button className='btn btn-default border w-50'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default App
