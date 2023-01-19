import {Link} from "react-router-dom"
import "./Item.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({element}) => {


  return (
     <Card sx={{ maxWidth: 345}}>
     <CardMedia
       component="img"
       alt={element.name}
       height="180"
       image={element.img}
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       {element.name}
       </Typography>
       <Typography variant="body2" color="text.secondary">
         Precio: ${element.price}
       </Typography>
     </CardContent>
     <CardActions style={{display: "flex", justifyContent: "center"}}>
       <Button size="small" variant="contained" ><Link to={`/itemDetail/${element.id}`}>Ver detalle</Link></Button>
     </CardActions>
   </Card>
  );
};

export default Item;