import React, { useEffect, useState } from 'react'
import './Categories.scss'
import Product from '../../components/Product/Product'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { axiosClient } from '../../utils/axiosClient';

function Categories() {
  const params = useParams();
  const navigate = useNavigate();
 const sortOptions = [{
    value : 'Price - low to high',
    sort : 'price'
  },
  {
    value : 'Newest First',
    sort : 'createdAt'
  }]
  const [categoryId , setCategoryId] = useState('');
  const [products , setProducts] = useState(null);
  const categories = useSelector((state)=>state.categoryReducer.categories)
  const [sortBy,setSortBy] = useState(sortOptions[0].sort)
  const url = params.categoryId ? `/products?populate=*&filters[category][key][$eq]=${params.categoryId}&sort=${sortBy}` : `/products?populate=*&sort=${sortBy}`;
  async function fetchProducts(){
    try {
      const response = await axiosClient.get(url)
      setProducts(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }
 

  useEffect(()=>{
    setCategoryId(params.categoryId)
    fetchProducts();
  },[params,sortBy])
//   function updateCategory(e) {
//     navigate(`/category/${e.target.key}`);
// }
  return (
    <div className='Categories'>
      <div className="container">
        <div className="header">
          <div className="info">
              <h2>Explore All Print and Artwork</h2>
              <p>  India's largest collection of wall posters for your
                            bedroom, living room, kids room, kitchen and posters
                            & art prints at highest quality lowest price
                            guaranteed.</p>
          </div>
        
        <div className="sort-by">
          <div className="sort-by-container">
            <h3 className="sort-by-text">Sort By</h3>
            <select name="sort-by" id="sort-by" className="sort-by" onChange={(e)=>setSortBy(e.target.value)} >
              {
                sortOptions.map((item)=>(<option key={item.sort} value={item.sort}>{item.value}</option>))
              }
            </select>
          </div>
        </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categories.map((item) => (
                                <div key={item.id} className="filter-radio">
                                    <input
                                        name="category"
                                        type="radio"
                                        value={item.attributes.key}
                                        id={item.id}
                                        onChange={()=>{
                                          navigate(`/category/${item.attributes.key}`)
                                        }}
                                        checked={
                                            item.attributes.key === categoryId
                                        }
                                    />
                                    <label htmlFor={item.id}>
                                        {item.attributes.title}
                                    </label>
                                </div>
                            ))}
            </div>
          </div>
          <div className="products-box">
          {
                  products?.map(product => <Product product={product} key = {product.id} />)
          }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Categories