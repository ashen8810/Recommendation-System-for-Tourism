import React from "react";
import { Box, useTheme } from "@mui/material";
// import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import GeographyChart from "components/GeographyChart";
// import { ResponsiveChoropleth } from "@nivo/geo";
// import { geoData } from "state/geoData";

const Geography = () => {
  const theme = useTheme();


  return (
    <Box m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subtitle="The geological ttaffic." />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        <GeographyChart/>
      </Box>
    </Box>
  );
};

export default Geography;