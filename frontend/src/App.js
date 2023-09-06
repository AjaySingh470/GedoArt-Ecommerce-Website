import {Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import ProductPage from './pages/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import { fetchCategories } from './redux/categorySlice';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import Payments from './components/Payments/Payments';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCategories());
  },[]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/category/:categoryId?' element={<Categories></Categories>} ></Route>
        <Route   path='/products/:productId' element={<ProductPage></ProductPage>} ></Route>
        <Route path='/payments/:status' element={<Payments></Payments>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
