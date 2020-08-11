import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen(props) {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push('payment');
  }
  return <div>
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Location</h2>
          </li>

          <li>
            <h5>
              Address
            </h5>
            <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)} />
          </li>
          <li>
            <h5>
              City
            </h5>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} />
          </li>
          <li>
            <h5>
              Postal Code
            </h5>
            <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)} />
          </li>
          <li>
            <h5>
              Country
            </h5>
            <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)} />
          </li>

          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>

        </ul>
      </form>
    </div>
  </div>

}
export default ShippingScreen;