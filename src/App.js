import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
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
import Preferences from "./pages/Preferences";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  //Setting up material ui.
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
      {/*<Schedule/>*/}
      {/* <Header /> */}
      {/* <Preferences /> */}
      <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/advertisment" element={<Advertisment />} />
              <Route path="/form" element={<Form />} />
              <Route path="/delete" element={<Delete/>} />
              <Route path="/ban" element={<Ban/>} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
            {/* <Topbar/>  */}
            {/* <Sidebar/> */}
            {/* <Dashboard/> */}
            {/* <Team/>
            <Geography/>
            <Invoices/> */}
            {/* <Contacts/> */}
        
            
          </main>
      
      <Footer />
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
