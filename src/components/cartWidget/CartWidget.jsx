import './CartWidget.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

  const { cart } = useContext(CartContext)

  return (
    <Link to="/cart" className='cartWidget'>
      <AiOutlineShoppingCart size={50} />
      <h2>{cart.length}</h2>
    </Link>
  )
}