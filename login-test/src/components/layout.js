import React, { useState, useContext } from 'react';
import RegisterForm from './registerForm';
import LoginForm from './logiForm';
import { AuthContext } from '../contexts/authContext';


const Layout = () => {
    const { state, logout } = useContext(AuthContext);
    console.log(state)
    const [form, setForm] = useState(true);

    // console.log(form);
  
    return (
      <div className="acc-page">
        {state.status !== 'authenticated' ?
          <div className="form-container">
            <div className="form-btn">
              <span onClick={() => setForm(false)}>Login</span>
              <span onClick={() => setForm(true)}>Register</span>
              <div className="indicator-container">
                {form ? <hr id="indicator2" /> : <hr id="indicator" />}
              </div>
              {form ? <RegisterForm /> : <LoginForm/>}
            </div>
          </div> : 
          <section>
            <h1>{ `Welcome ${ state?.user?.firstName }` }</h1>
            <button onClick={logout} className="btn">logout</button>
          </section>
        }
      </div>
    );
};

export default Layout;