import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import './Home.scss'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'
import { axiosClient } from '../../utils/axiosClient'
function Home() {
  const [categories , setCategories ] = useState(null);
  const [products, setProducts] = useState(null);
  const fetchData = async ()=>{
    const response = await axiosClient.get('/categories?populate=Image')
    const productList = await axiosClient.get('/products?populate=image');

    setCategories(response.data.data);
    setProducts(productList.data.data);
  } 

  useEffect(()=>{
    fetchData();
  },[])
  // console.log(categories)
  return (
    <div className='Home'>
        <Hero></Hero>
        <section className='collection container' >
            <div className='info' >
              <h2 className='heading' >
                Shop By Categories
              </h2>
              <p className='subheading' >Shop from the best...</p>
            </div>
            <div className='content'>
                {
                  categories?.map(category => <Category category={category} key={category.id} />)
                }
            </div>

        </section>
        <section className='collection container' >
            <div className='info' >
              <h2 className='heading' >
                Top Picks
              </h2>
              <p className='subheading' >All New Designs , and Arts...</p>
            </div>
            <div className='content'>
                {
                  products?.map(product => <Product product={product} key = {product.id} />)
                }
            </div>
        </section>
    </div>
  )
}

export default Home