import React, { useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useSelector } from 'react-redux';

import ProductDisplayScreen from './screens/ProductDisplayScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import TermsOfUse from './screens/TermsOfUse';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TermsOfSupply from './screens/TermsOfSupply';


function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <BrowserRouter>
      <div className="grid-container">

        <header>
          <div className="logos">
            <a href="/" data-target="slide-out" className="sidenav-trigger bolder top-pad"><i className="fas fa-bars"></i></a>
            <Link to="/" className="sitelogo top-pad">Seedat Aquatics</Link>
          </div>
          <div className="navbar">
            <ul>
              <li className="top-pad"><Link to="/"><i className="fas fa-home active"></i></Link></li>
              <li className="top-pad"><Link to="/cart/:id"><i className="fas fa-shopping-cart"></i></Link></li>
            {userInfo && userInfo.isAdmin && (
              <>
              <li className="top-pad"><Link to="/orders"><i className="fas fa-tasks"></i></Link></li>
              <li className="top-pad"><Link to="/products"><i className="fas fa-warehouse"></i></Link></li>
              </>
            )}
            {userInfo ? (
              <li className="top-pad"><Link to="/profile"><i className="fas fa-user"></i></Link></li>
            ) : (
              <li className="top-pad"><Link to="/signin"><i className="fas fa-sign-in-alt"></i></Link></li>
            )}
            </ul>
          </div>
        </header>
              
        <ul id="slide-out" className="sidenav">
              <div className="header black card-panel blue-text"><h4>Shopping Categories</h4></div>
              <li>
                <Link to="/category/Phones"><i className="fas fa-mobile-alt"></i>Phones</Link>
              </li>
              <li>
                <Link to="/category/Laptops"><i className="fas fa-laptop"></i>Laptops</Link>
              </li>
              <li>
                <Link to="/category/Headphones"><i className="fas fa-headphones"></i>Headphones</Link>
              </li>
              <li>
                <Link to="/category/Keyboard-Sets"><i className="fas fa-keyboard"></i>Keyboard-Sets</Link>
              </li>
              <li>
                <Link to="/category/Consoles"><i className="fas fa-gamepad"></i>Consoles</Link>
              </li>
        </ul>

        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={ProductDisplayScreen} />
            <Route path="/" exact={true} component={ProductDisplayScreen} />
            <Route path="/terms-of-use" component={TermsOfUse} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-of-supply" component={TermsOfSupply} />
          </div>
        </main>
        <footer className="footer">
          <div className="foot1">

            <div className="footy">
              <h3>My Acount</h3>
              <div className="acc">
                <div><Link to="/profile">Profile</Link></div>
                <div><Link to="/cart/:id">Shopping Cart</Link></div>
              </div>
            </div>

            <div className="footy">
              <h3>About Us</h3>
              <div className="infomo">
                <div><Link to="/terms-of-use">Terms of Use</Link></div>
                <div><Link to="/privacy-policy">Privacy Policy</Link></div>
                <div><Link to="/terms-of-supply">Terms of Supply</Link></div>
              </div>
            </div>

            <div className="footy">
              <h3>Contact Us</h3>
              <div className="socials">
                <a href="https://twitter.com/AZTECH_CL_69"><div className="fa fa-twitter"></div></a>
                <a href="https://www.linkedin.com/in/az-tech-4258911b3"><div className="fa fa-linkedin"></div></a>
                <a href="https://www.instagram.com/aztech_cl_69"><div className="fa fa-instagram"></div></a>
                <a href="https://www.facebook.com/cameron.luyt.9"><div className="fa fa-facebook-square"></div></a>
              </div>
            </div>

          </div>
          <div className="foot2">© 2020 Seedat Aquatics | Designed and Developed By Cameron Luyt</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;
