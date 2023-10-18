import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
// import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Bar from "./pages/bar";
import Form from "./pages/form";
import Line from "./pages/line";
import Pie from "./pages/pie";
import Geography from "./pages/geography";
import { CssBaseline, Menu, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./pages/calendar/calendar";
import Delete from "./pages/delete";
import Ban from "./pages/ban";
import Advertisment from "./pages/advertisment";
import "./App.css";
import Preferences from "./pages/Preferences/Preferences";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Schedule from "./pages/Schedules/Schedule";
import Login from "pages/Login/Login";
import Homepage from "./pages/Homepage";

function App() {
  //Setting up material ui.
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div>
      <Header />
      <Preferences />
      <Footer />
    </div>
  );
}

export default App;
