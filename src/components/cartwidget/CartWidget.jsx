import './CartWidget.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

  const { cart, countProducts } = useContext(CartContext)

  return (
    <Link to="/cart" className='cartWidget'>
      <AiOutlineShoppingCart size={50} />
      <h2>{countProducts()}</h2>
    </Link>
  )
}
