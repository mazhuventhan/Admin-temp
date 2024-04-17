import { Button } from "@mui/material";
import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from "sweetalert2"

const Logout = () => {
    const handleLogout = () => {
        Swal.fire({
            text: 'Are you sure want to Logout?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            icon: 'warning'
        }
        ).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('', 'Logged out Successfully', 'success').then((res)=>{
                    window.location.replace("/");
                });
            }
        }
        )
    }
    return (
        <>
            <Button onClick={handleLogout} startIcon={<LogoutIcon />} >Logout</Button>
        </>
    )
}
export default Logout;