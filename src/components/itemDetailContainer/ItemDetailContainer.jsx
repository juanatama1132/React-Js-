import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ItemCount } from '../itemCount/ItemCount';
import { ItemDetail } from '../itemDetail/ItemDetail';
import { getDoc, doc, collection } from "firebase/firestore"
import { db } from "../../firebaseConfig"


export const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect( ()=>{

    const itemCollection = collection( db, "products")
    const ref = doc( itemCollection, id)

    getDoc(ref)
    .then( res => {
      setProduct(
        {
          id: res.id,
          ...res.data()
        }
      )
    })

  }, [id])

  return (
    <ItemDetail product={product} />
  )
}
