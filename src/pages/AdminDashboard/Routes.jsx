
// import './App.css';
import { BrowserRouter, Link ,Route,Routes} from "react-router-dom";
import Create from '../create/Create.jsx';
// import DashboardSideBar from './components/DashboardSideBar.js';
import Dashboard from "../dashboard/Dashboard.jsx";
import { CssBaseline } from "@mui/material";
import Layout from "../../components/Layout.jsx";
import Ban from "../ban/Ban.jsx";
// import Delete from "./pages/delete/Delete.jsx";
import Delete from "../delete/Delete.jsx"

function App() {
  return (
    <div>
    <CssBaseline/>
    <div className="App">
        
        {/* <DashboardSideBar/> */}
        
        <div>
        <Routes>
           <Route element={<Layout/>}>  
            <Route path='/' element={<Dashboard/>}/>       
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/Create' element ={<Create/>}/>
            <Route path='/Ban' element ={<Ban/>}/>
            <Route path='/Delete' element ={<Delete/>}/>
            </Route>
        </Routes>
        </div>
           
    </div>
    </div>
  );
}

export default App;
