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
          <Typography component="h9">No rating given</Typography>
          <Rating name="no-value" value={null} /> 
        </div>
        :
        <div className='stars' style={{ display: 'flex', alignItems: 'center',marginLeft:"5 px" }}>
          <Typography variant="h9" component="h6" style={{ marginRight: '20px' }}>Rate:</Typography>
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