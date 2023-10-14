import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Advertisment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 
    
  return (
      <div>This advertisment.</div>
  );
};

export default Advertisment;
