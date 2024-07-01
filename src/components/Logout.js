import { Button } from "@mui/material";
import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from "sweetalert2"
import { appConstants } from "../apiKit/appConstant";
import Logo from "../Images/logo.png"
const Logout = () => {
    const handleLogout = () => {
        Swal.fire({
            text: appConstants.logoutWarning,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            imageUrl:Logo,            
            // icon: 'warning',
            customClass: {
                confirmButton: 'swal2-confirm',
                cancelButton: 'swal2-cancel'
            }
            
        }
        ).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('', 'Logged out Successfully', 'success').then((res)=>{
                    localStorage.clear();
                    window.location.replace("/");
                });
            }
        }
        )
    }
    return (
        <>
            <Button onClick={handleLogout} style={{textTransform:'none',fontFamily:"poppin-light"}} startIcon={<LogoutIcon />} >Logout</Button>
        </>
    )
}
export default Logout;