
// import './App.css';
import { BrowserRouter, Link ,Route,Routes} from "react-router-dom";
import Create from '../../../pages/Board/create/Create';
// import DashboardSideBar from './components/DashboardSideBar.js';
import Dashboard from "../../../pages/Board/dashboard/Dashboard";
import { CssBaseline } from "@mui/material";
import Layout from "../../../components/Dashboard/Layout/Layout";
import Ban from "../../../pages/Board/ban/Ban";
// import Delete from "./pages/delete/Delete.jsx";
import Delete from "../../../pages/Board/delete/Delete"
import User from '../../../pages/Board/users/Users'
import '../../../assets/CSS/Dashboard/Routes.css'

function App() {
  return (
    // <div>
    // <CssBaseline/>
    // <div className="App">
        
    //     {/* <DashboardSideBar/> */}
        
    //     <div>
    //     <Routes>
    //        <Route element={<Layout/>}>  
    //         <Route path='/' element={<Dashboard/>}/>       
    //         <Route path='/Dashboard' element={<Dashboard/>}/>
    //         <Route path='/Create' element ={<Create/>}/>
    //         <Route path='/Ban' element ={<Ban/>}/>
    //         <Route path='/Delete' element ={<Delete/>}/>
    //         </Route>
    //     </Routes>
    //     </div>
           
    // </div>
    // </div>



    <div id="dashboard">
        
    <Routes>
       <Route element={<Layout/>}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Users' element={<User/>} />
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Ban' element={<Ban/>}/>
          <Route path='/Delete' element={<Delete/>}/>
       </Route>
    </Routes>

    </div>
  );
}

export default App;
