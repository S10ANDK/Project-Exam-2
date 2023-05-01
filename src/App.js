import React from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import './App.css';

const StyledButton = styled(Button)`
  background-color: #000000;
  color: '#FFFFFF';

  :hover {
    color: #000000;
  }
`;

function App() {
  return (
    <div>
      <Typography variant="h1" color="primary">
        we are testing this font okay
      </Typography>
      <Typography variant="p">hello yes yes</Typography>
      <StyledButton>click me!</StyledButton>
    </div>
  );
}

export default App;
