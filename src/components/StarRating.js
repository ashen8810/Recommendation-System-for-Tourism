import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const StarRating= () => {
  const [value, setValue] = React.useState(1);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {value < 1 ?
        <div>
          <Typography component="h2">No rating given</Typography>
          <Rating name="no-value" value={null} /> 
        </div>
        :
        <div className='stars'>
          <Typography variant="h9" component="h5">Rate</Typography>
          <br></br>
          <br></br>
          <br></br>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      }
    
    </Box>
  );
}

export default StarRating;
  {/* <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly /> */}
{/* 
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}