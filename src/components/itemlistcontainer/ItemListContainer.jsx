import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import { ItemList } from "../itemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

export const ItemListContainer = () => {
  const { categoryName } = useParams()

  const [items, setItems] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    setIsLoading(true)

    const itemCollection = collection( db, "products" )

    if( categoryName ){

      const q = query( itemCollection, where( "category", "==", categoryName ) )

      getDocs(q)
      .then( (res) => {
        const Products = res.docs.map( product => {
          return {
            id: product.id,
            ...product.data()
          }
        } )
        setItems(Products)
      } )
      .catch( (err) => console.log("Error en la base de datos") )

    }else{

      getDocs(itemCollection)
      .then( (res) => {
        const Products = res.docs.map( product => {
          return {
            id: product.id,
            ...product.data()
          }
        } )
        setItems(Products)
      } )
      .catch( (err) => console.log("Error en la base de datos") )
      
    }


      setTimeout(()=>{
        setIsLoading(false)
      }, 1000)

  }, [categoryName])

  return (
    <div className='container'>
      {
        isLoading ? <CircularProgress size={100} /> : <ItemList items={items}/>
      }
    </div>
  )
}
