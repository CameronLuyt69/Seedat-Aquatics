import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">

        <li>
          <h2>Create Account</h2>
        </li>

        <li>
          {loading && <div>Loading...</div>}
          {error && <div>Please enter all valid details</div>}
        </li>
        <li>
          <h5>Name</h5>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
        </li>
        <li>
          <h5>Email</h5>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
        </li>
        <li>
          <h5>Password</h5>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
        </li>
        <li>
          <h5>Re-Enter Password</h5>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}></input>
        </li>
        
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>

        <li>
          Already have an account?
          <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center" >Create your Seedat Aquatics account</Link>
        </li>

      </ul>
    </form>
  </div>
}
export default RegisterScreen;