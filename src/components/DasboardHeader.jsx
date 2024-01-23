import { Typography, Box } from "@mui/material";
import React from "react";


const Header = ({ title, subtitle }) => {
  
  return (
    <Box>
      <Typography
        variant="h3"
        color="#f2f0f0"
        fontWeight="bold"
        sx={{ mb: "5px"}}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="#4cceac" >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;