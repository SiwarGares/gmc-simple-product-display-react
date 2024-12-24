import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product'; 

const App = () => {
  const firstName = "siwar"; 

  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Card.Body>
          <Card.Title>Product Details</Card.Title>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Image src={product.image} alt={product.name} />
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {firstName ? (
          <>
            <p>Bonjour, {firstName}!</p>
            <img
              src={product.image} 
              alt="My Avatar"
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
    </div>
  );
};

export default App;
