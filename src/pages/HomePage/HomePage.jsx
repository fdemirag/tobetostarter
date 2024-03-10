import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function HomePage() {

  const cart = useSelector(state => {
    return state.cart}
    
  );
  return (
    <div>
        {cart.cartItems.length} adet ürün sepette
        <br/>
        <Link to= {"/Posts"} >Posts</Link>
        
      </div>
  )
}
