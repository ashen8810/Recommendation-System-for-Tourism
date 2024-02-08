import React, { useMemo,useState,useEffect } from 'react'
import css from '../../../assets/CSS/Dashboard/Users.module.css'
import {
    MaterialReactTable,
  } from 'material-react-table';
// import { userData } from '../../../data/mockData';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';


const User = () => {

        const [userData, setUserData] = useState([]);

        useEffect(() => {
            const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/user/users');
                console.log(response.data)
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
            };

            fetchUserData();
        }, []);

    const columns = useMemo(()=>[
        {
            accessorKey: "userId",
            header: 'userId',
        },
        {
            accessorKey: "userName",
            header: 'userName',
        },
        {
            accessorKey: "email", 
            header: "email",
        },
        {
            accessorKey: "country",
            header: "country",
        },
        {
            accessorKey: "user_type",
            header: "userType",
        },
        {
            accessorKey: "isBanned",
            header: "isBanned",
        },
        // {
        //     accessorKey: "banExpirationDate",
        //     header: "ban Exp.Date",
        // },

    ],[])

    const theme = useMemo(
        ()=> createTheme({
            palette:{
                mode:"dark"
            }
        },),[]
    )


  return (
    <div className={css.container}>
        <ThemeProvider theme={theme}>
              <MaterialReactTable columns={columns} data={userData} pageSize={5}/>
              
        </ThemeProvider>
       
    </div>
  )
}

export default User





// #########################################################################################


