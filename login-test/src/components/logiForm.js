import React, { useState, useContext } from 'react'
import { loginService } from '../services/services';
import { AuthContext } from '../contexts/authContext';

const LoginForm = () => {
    const { adding } = useContext( AuthContext );
    const [formValues, setFormValues] = useState({});
    
    const values = (event) => {
      let objData = formValues;
      objData[event.target.name] = event.target.value;
    
      setFormValues(objData);
    }
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      const result = await loginService(formValues);
      console.log(result)
      if (result.status === 200) adding( result.data.body );
    };

  return (
    <form id="loginform" onSubmit={handleSubmit}>
      <input type="text" placeholder="username" name='email' onChange={values}/>
      <input type="password" placeholder="password" name='password' onChange={values}/>
      <button type="submit" className="btn">
        Login
      </button>
    </form>
  )
}

export default LoginForm