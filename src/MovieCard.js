import React from 'react';
import Card from 'react-bootstrap/Card';


const MovieCard = ({ movie }) => {
  const { name, description, rating, poster, genre } = movie;

  return (
    <>

      <Card style={{ width: '18rem', marginRight: '20px', marginBottom: '20px' }}>
      <Card.Img variant="top" src={poster} alt={name} style={{ width: '100%', height: 'auto' }} />
      <Card.Body>
        <Card.Title className='text-center'>{name}</Card.Title>
        <Card.Text>Description: {description}</Card.Text>
        <Card.Text >Genre: {genre}</Card.Text>
        <Card.Text style={{ color: "#FDA403" }}>Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
         
         
  
      
    </>
    
  );
};

export default MovieCard;