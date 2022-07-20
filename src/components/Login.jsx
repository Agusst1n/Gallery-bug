import React from 'react'
import useFunctions from '../hooks/useFunctions'
import './Login.css'

const Login = () => {


 const {handleChange,data,handleSubmit}= useFunctions() //customHook

  return (
    <>
      <div className="formulario-container">
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" name='email' placeholder='email' onChange={handleChange}/>
            <input type="text" name='password' placeholder='password' onChange={handleChange}/>
            <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login