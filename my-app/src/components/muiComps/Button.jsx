
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
      <Button color='secondary' variant="contained">{something}</Button>

    </Stack>
  );
}