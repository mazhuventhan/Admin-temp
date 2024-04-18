import { Button, Card, CardContent } from '@mui/material';
import React from 'react';

function NotFound() {
  return (
    <div>
      <Card style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <CardContent>
          <h1>404 - Not Found!</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Button onClick={()=>window.location.replace('/dashboard')} variant='contained' style={{ textTransform: 'none' }}>Go to Homepage</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default NotFound;