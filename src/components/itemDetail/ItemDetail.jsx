import React, { useContext, useEffect, useState } from 'react'
import "./ItemDetail.css"
import { useParams } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ItemCount } from '../itemCount/ItemCount';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ( { product } ) => {

  const { addToCart, getQuantityById } = useContext( CartContext )

    const onAdd = ( quantity ) => {
        
        addToCart( 
            {
                ...product,
                quantity: quantity
            }
         )

    }

    const quantity = getQuantityById( product.id )


  return (
    <div className='card'>
         <Card sx={{ maxWidth: 600 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={product.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
    <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity}/>
    </div>
  )
}
