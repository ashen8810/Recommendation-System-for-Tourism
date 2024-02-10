import React from 'react'
import css from '../../../assets/CSS/Dashboard/Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard ,MdOutlineEmail, MdLogout  } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { RiUserForbidLine,RiUserAddLine,RiUserUnfollowLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
       const navigate = useNavigate()
  return (
     <div className={css.container}>
        <span>
            <h3>Tra<span>v</span>ela</h3>
        </span>

        <div className={css.menu}>
             <NavLink to="Dashboard" className={css.item} title={"Dashboard"}>
                    <MdOutlineDashboard size={30} />
             </NavLink>

             <NavLink to="Users" className={css.item} title={"Users"}>
                    <PiUsersThree size={30}/>
             </NavLink>

             <NavLink to="Email" className={css.item} title={"Email"}>
                    <MdOutlineEmail size={30} />
             </NavLink>

             <NavLink to="Create" className={css.item} title={"Create"}>
                    <RiUserAddLine size={30} />
             </NavLink>

             <NavLink to="Ban" className={css.item} title={"Ban"}>
                    <RiUserForbidLine size={30} />
             </NavLink>

             <NavLink to="Delete" className={css.item} title={"Delete"}>
                    <RiUserUnfollowLine size={30} />
             </NavLink>

             <NavLink to="/" className={css.item} title={"Logout"} >
                    <MdLogout size={30} />
             </NavLink>

        </div>
     </div>
  )
}

export default Sidebar