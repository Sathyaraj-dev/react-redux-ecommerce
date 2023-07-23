import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';

function ProductsItem({item}) {
    return ( 
       <>
         <Card key={item.id}>
            <CardActionArea component={Link} to={`/product/${item.id}`}>
                <CardMedia
                    component="img"
                    image={item.image}
                    title={item.title}
                    height="250"
                />
                <CardContent>
                    {item.title}
                    <p className='product-price'>Price: <span>${item.price}</span></p>
                    <div style={{display: 'flex'}}>Ratings: <Rating name="read-only" value={item.rating.rate} readOnly /></div>
                    
                </CardContent>
            </CardActionArea>
        </Card>
       </>
     );
}

export default ProductsItem;