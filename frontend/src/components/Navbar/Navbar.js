import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa';
import Cart from '../../pages/Cart/Cart'
import { useSelector } from 'react-redux';
function Navbar() {
    const [isClick , setIsClick] = useState(false);
    const cart = useSelector(state => state.cartReducer.cart);
    let totalItems = 0;
    cart.forEach(item => totalItems += item.quantity);
    const categories = useSelector(state => state.categoryReducer.categories);
  return (
    <div className='Navbar' >
        <div className='container nav-container' >
            <div className='nav-left'>
                <ul className='list-group'>
                    {
                        categories?.map(
                            (category)=>  <li key={category.attributes.key} className='hover-link' >
                        <Link className='link' to={`/category/${category.attributes.key}`} >{category.attributes.title}</Link>
                    </li>
                        )
                    }
                </ul>
            </div>
            <div className='nav-center' >
                <Link to='/' >
                    <h1 className='banner'>GedoArt</h1>
                </Link>
            </div>
            <div className='nav-right' >
                <div onClick={()=>setIsClick(!isClick)} className='cart hover-link ' >
                    <FaShoppingCart className='cart-icon'></FaShoppingCart>
                   { totalItems>0 && <span className='items-count center-content'>{totalItems}</span>}
                </div>
            </div>
        </div>
        {
           isClick && <Cart closeIt={()=>setIsClick(false)} ></Cart>
        }
    </div>
  )
}

export default Navbar