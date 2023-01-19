import { useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Grid, TextField, Typography } from "@mui/material"
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore"
import { db } from "../../firebaseConfig"
export const Form = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({ name: "", phone: "", email: "" })



  const total = getTotalPrice()

  const handleSubmit = (event) => {
    event.preventDefault()

    const order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    }

    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order).then((res) => setOrderId(res.id))

    cart.map((product) => (
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    ))

    clearCart()
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
          <TextField
              type="text"
              label="Ingrese su nombre"
              placeholder="Ingrese su nombre"
              name="name"
              variant="outlined"
              fullWidth
              value={userData.name}
              onChange={(event) =>
                setUserData({ ...userData, name: event.target.value })}
            />
           <TextField
              type="text"
              label="Ingrese su telefono"
              placeholder="Ingrese su telefono"
              name="phone"
              variant="outlined"
              fullWidth
              value={userData.phone}
              onChange={(event) =>
                setUserData({ ...userData, phone: event.target.value })}
            />
           <TextField
              type="text"
              label="Ingrese su email"
              placeholder="Ingrese su email"
              name="email"
              variant="outlined"
              fullWidth
              value={userData.email}
              onChange={(event) =>
                setUserData({ ...userData, email: event.target.value })}
            />
        <Button variant="outlined" type="submit">Finalizar compra</Button>
      </form>
    </div>
  )
}
