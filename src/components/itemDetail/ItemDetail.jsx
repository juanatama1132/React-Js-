import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../itemCount/ItemCount"
import styles from "./ItemDetail.module.css"

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    })

  }

  return (
    <div className={styles.containerItemDetail}>
      <div className={styles.containerImage}>
        <img src={product.img} alt="" />
      </div>

      <div className={styles.containerDetail}>
          <h2 style={{fontFamily: "monospace"}}><span style={{fontSize:"23px"}}>Nombre:</span> {product.name}</h2>
          <h2 style={{fontFamily: "monospace"}}><span style={{fontSize:"23px"}}>Descripcion:</span> {product.description}</h2>
          <h2 style={{fontFamily: "monospace"}}><span style={{fontSize:"23px"}}>Precio:</span> ${product.price}.-</h2>

        <ItemCount onAdd={onAdd} stock={product.stock} />
      </div>
    </div>
  )
}

export default ItemDetail