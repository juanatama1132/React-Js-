
import React from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "./CartItem.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CartItem = ({ item }) => {

  const { deleteProductById } = useContext( CartContext )

  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardMedia
        component="img"
        alt={item.name}
        height="400"
        image= {item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
          <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}