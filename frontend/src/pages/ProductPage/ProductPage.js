import React, { useEffect, useState } from 'react'
import './ProductPage.scss'
import { useParams } from 'react-router-dom'
import { axiosClient } from '../../utils/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import {removeItem, addItem } from '../../redux/cartSlice'
function ProductPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const [productData , setProductData] = useState(null);

  const cart = useSelector(state => state.cartReducer.cart);
  const quantity = cart.find((item)=>item.key === params.productId)?.quantity || 0;

  const fetchProductData = async()=>{
    const productRes = await axiosClient.get(`/products?filters[key][$eq]=${params.productId}&populate=image`);
    // console.log(productRes.data.data)
    if(productRes?.data?.data.length > 0)
    {
      setProductData(productRes?.data?.data[0]);
    }
    
  }
  useEffect(()=>{
    fetchProductData();
    // eslint-disable-next-line
  },[params])

  return (
    <div className='ProductPage' >
        <div className='container' >
            <div className='product-layout' >
              <div className='product-img center-content' >
                <img src={productData?.attributes?.image.data.attributes.url} alt="f" ></img>
              </div>
              <div className='product-info' >
                  <h1 className="heading">
                    {productData?.attributes.title.replaceAll("-"," ")}
                  </h1>
                  <h3 className='price' >{`₹${productData?.attributes?.price}`}</h3>
                  <p className="description">
                    {productData?.attributes.desc}
                  </p>
                  <div className="cart-options">
                    <div className="quantity-selector">
                      <span className="btn decrement" disabled={(quantity===0)? true : false} onClick={()=>dispatch(removeItem(productData))} >-</span>
                      <span className="quantity">{quantity}</span>
                      <span className="btn increment" onClick={()=>dispatch(addItem(productData))} >+</span>
                    </div>
                    <button className='primary-btn' onClick={()=>dispatch(addItem(productData))}  > Add to Cart</button>
                  </div>
                  <div className="return-policy">
                    <ul>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deserunt.</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nostrum!</li>
                    </ul>
                  </div>
              </div>  
            </div>  
        </div>
    </div>
  )
}

export default ProductPage