import React from 'react'
import './CartItems.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { addItem, removeItem , deleteItem } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
function CartItems({cart}) {
  // console.log(cart)
  const dispatch = useDispatch();
  return (
    <div className='CartItems' >

            <div className="item-img">
                <img src={cart.image} alt='_' ></img>
            </div>
            <div className='info' >
                <div className="item-info">
                    <p className='title' > {cart?.title?.length > 28 ? `${cart?.title.slice(0,28).replaceAll("-"," ")}...`: `${cart?.title.replaceAll("-"," ")}`}</p>
                    <p className="price">₹{cart.price}</p>
                    <div className="quantity-selector">
                          <span className="btn decrement" onClick={()=>dispatch(removeItem(cart))} >-</span>
                          <span className="quantity">{cart.quantity}</span>
                          <span className="btn increment" onClick={()=>dispatch(addItem(cart))} >+</span>
                    </div>
                    <p className="total-price">SubTotal: ₹ {cart.price*cart.quantity}</p>
                </div>
            </div>
            <div className="item-remove" onClick={()=>dispatch(deleteItem(cart))}>
                <AiOutlineClose></AiOutlineClose>
            </div>
    
    </div>
  )
}

export default CartItems