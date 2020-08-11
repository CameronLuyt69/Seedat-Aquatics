import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';

function OrderScreen(props) {
  const orderPay = useSelector(state => state.orderPay);
  const { success: successPay } = orderPay;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successPay]);
  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ? <div>Loading...</div> : error ? <div>{error}</div> :

    <div>
      <div className="placeorder">
        <div className="placeorder-info">

          <div>
            <h3>
              Location
            </h3>
            <div>
              {order.shipping.address}, {order.shipping.city},{order.shipping.postalCode}, {order.shipping.country}
            </div>
          </div>
          
          <div>
            <h3>Payment</h3>
            <div>
              Payment Method: {order.payment.paymentMethod}
            </div>
            <div>
              <div>Paid at: Not Paid</div>
            </div>
          </div>

          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Shopping Cart
                </h3>
                <div>
                  Price
                </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Cart is empty
                  </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>
                        </div>
                        <div>
                          Qty: {item.qty}
                        </div>
                      </div>
                      <div className="cart-price">
                        R{item.price}
                      </div>
                    </li>
                  )
              }
            </ul>
          </div>

        </div>

        <div className="placeorder-action">
          <ul>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>R{order.itemsPrice}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>R{order.totalPrice}</div>
            </li>
            <li className="placeorder-actions-status">
              <div>Status: Pending...</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
}

export default OrderScreen;