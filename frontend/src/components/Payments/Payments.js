import React from 'react'
import './Payments.scss'
import successGif from '../../assets/success.gif'
import failedGif from '../../assets/failed.gif'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { resetCart } from '../../redux/cartSlice';

function Payments() {
    const params = useParams();
    const status = params.status;
    const navigate = useNavigate();
    const infoData = {
        success : {
            message : "Your order has been placed ",
            btnText : "Shop More",
            icon : successGif
        },
        failed : {
            message : "Payment Failed ",
            btnText : "Try Again",
            icon : failedGif
        }
    }
    const dispatch = useDispatch()
    if(status === "success")
    {
        dispatch(resetCart);
    }

  return (
    <div className='Payments' >
        <div className='icon' ><img src={infoData[status].icon} alt="" srcset="" />
        </div>
        <div className="message"><h2>{infoData[status].message}</h2></div>
        <button className="primary-btn" onClick={()=>navigate('/')} >{infoData[status].btnText} </button>

    </div>
  )
}

export default Payments