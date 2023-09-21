import './App.css';
import Homepage from "./pages/Homepage";
import Schedule from "./pages/Schedule";
import Header from "./components/Header/Header"
import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme}  from "@mui/material/styles"
import { useMemo } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "pages/layout"
import Dashboard from "pages/dashboard";
import Users from "pages/users";
import Geography from "pages/geography";

function App() {

  
  //Setting up material ui.
  const mode = useSelector((state)=>state.global.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode]);

  return (
    <div className="App">
      {/*<Schedule/>*/}
      <Header />
      
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
         <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/geography" element={<Geography/>} />
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
