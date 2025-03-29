import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("https://reqres.in/api/login", {
                email,
                password,
            });
            localStorage.setItem("token", response.data.token);
            navigate("/user");
        }catch (e) {
            setError("Invalid email or password")
        }
    }

  return (
    <>
        <div className='login-form'>
            <h1>Login</h1>
            <form onSubmit={handleLogin} className='form'>
                <input className='border-red' 
                    placeholder='Email' type='email' value={email} 
                    onChange={ (e) => setEmail(e.target.value)} required/>

                <input placeholder='Password' type='password' value={password}
                    onChange={ (e) => setPassword(e.target.value)} required/>
                <button type='submit'> Login </button>
            </form>

            {error? `<p>${ error }</p>` : null}
        </div>
    </>
  )
}

export default Login
