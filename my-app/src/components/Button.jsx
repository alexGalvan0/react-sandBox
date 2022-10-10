
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons( 
    {
        something = 'zack'
    }
    
    ) {




  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">{something}</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}