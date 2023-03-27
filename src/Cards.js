import React from 'react';
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



  const Cards = ({movie}) => {
console.log('movie',movie)
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZsSoPmPlY21w32s8J1y1BaHeTsHus2kF-w&usqp=CAU" />
      <Card.Body>
        <Card.Title>{movie.name} </Card.Title>
        <Card.Text>
          {movie.website}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default Cards ;
