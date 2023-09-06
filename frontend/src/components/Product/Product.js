import React from 'react'
import './Product.scss'
import dummyImg from '../../assets/naruto.jpeg'
import { useNavigate } from 'react-router-dom'
function Product({product}) {
  const navigate = useNavigate();
  return (
    <div className='Product' onClick={()=>{
        navigate(`/products/${product?.attributes?.key}`)
    }} >
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img src={product?.attributes?.image.data.attributes.url ||  dummyImg} id='img' alt="" />
          </div>
        </div>
        <div className="product-info">
          <div className="title">
            {product?.attributes?.title?.length > 28 ? `${product?.attributes?.title.slice(0,28).replaceAll("-"," ")}...`: `${product?.attributes?.title.replaceAll("-"," ")}`}
          </div>
          <p className="price">
            {`₹${product?.attributes?.price}`}
          </p>
        </div>
      </div>

    </div>
  )
}

export default Product