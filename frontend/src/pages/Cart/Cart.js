import React from 'react';
import '../Cart/Cart.scss';
import {AiOutlineClose} from 'react-icons/ai'
import CartItems from '../../components/CartItems/CartItems';
import { useSelector } from 'react-redux';
import {axiosClient} from '../../utils/axiosClient'
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function Cart({closeIt}) {
  const cart = useSelector(state => state.cartReducer.cart);
  console.log(cart);

  async function handleCheckout()
  {
      const response = await axiosClient.post('/orders',{
        products : cart
      })
      const stripe = await stripePromise;
      console.log(response.data.stripeId , "Hfhfgf");
      await stripe.redirectToCheckout({
        sessionId : response.data.stripeId
      })
  }

  let totalPrice = 0;
  cart.forEach((item)=>totalPrice += item.price*item.quantity)
  return (
    <div className='Cart' >
      <div className="overlay" onClick={closeIt} >

      </div>
      <div className="cart-content">
        <div className="header">

          <h3>Items</h3>
          <div onClick={closeIt} className="close">
           <AiOutlineClose></AiOutlineClose> Close
          </div>
        </div>
        <div className="cart-items">
          <div className="items">

        {
          cart.map(item => <CartItems cart={item} key={item.key} ></CartItems>)
        }
        </div>

        </div>
        { cart.length>0 && <div className="checkout">
          <div className="total-amount">
            <h3 className='message' >Total : </h3>
            <h3 className='price' >₹ {totalPrice}</h3>
          </div>
          <div className="btn-checkout primary-btn" onClick={handleCheckout} >Checkout</div>
        </div>}
      </div>
    </div>
  )
}

export default Cart