import React, { useMemo } from 'react'
import css from '../../../assets/CSS/Dashboard/Users.module.css'
import {
    MaterialReactTable,
  } from 'material-react-table';
import { userData } from '../../../data/mockData';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const User = () => {

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


