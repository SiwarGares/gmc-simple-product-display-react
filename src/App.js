import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "siwar"; 

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Product Details</Card.Title>
          <Name />
          <Price />
          <Description />
          <Image />
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <div style={{ marginTop: '20px' }}>
        {firstName ? (
          <>
            <p>Bonjour, {firstName}!</p>
            <img
              src="" 
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
