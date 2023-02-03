import React from "react"
import Item from "../item/Item"
import "./ItemList.css"

export const ItemList = ({ items }) => {
  return (
    <div className="container-cards">
      {items.map((element) => {
        return <Item key={element.id} element={element} />
      })}
    </div>
  )
}
