import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout, update } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }))
  }
  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector(state => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;
  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    dispatch(listMyOrders());
    return () => {

    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo])

  return <div className="profile">
    <div className="profile-info">
      <div className="form">
        <form onSubmit={submitHandler} >
          <div className="form-container">
            <div>
              <h2>User Profile    <i className="fas fa-user"></i></h2>
            </div>
            <div>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {success && <div>Profile Saved</div>}
            </div>

            <div className="input-field">
              <h5>Name</h5>
              <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="input-field">
              <h5>Email</h5>
              <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="input-field">
              <h5>Password</h5>
              <input value={password} className="inputform" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
              <button type="submit" className="button primary">Update</button>
            </div>
            <div>
              <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
            </div>

          </div>
        </form>
      </div>
    </div>
    <div className="profile-orders content-margined">
      {
        loadingOrders ? <div>Loading...</div> :
          errorOrders ? <div>{errorOrders} </div> :
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    <Link to={"/order/" + order._id}><i className="fas fa-info-circle"></i></Link>
                  </td>
                </tr>)}
              </tbody>
            </table>
      }
    </div>
  </div>
}

export default ProfileScreen;