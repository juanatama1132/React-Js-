import './CartWidget.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export const CartWidget = () => {
  return (
    <div className='cartWidget'>
      <AiOutlineShoppingCart size={50} />
      <h2>15</h2>
    </div>
  )
}