import React from "react";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { useLocation, Link } from "react-router-dom";
import "../custom.css";
import Logo from "../Images/logo.png";
import PermMediaIcon from '@mui/icons-material/PermMedia';
const SideBar = () => {
    const location = useLocation();
    return (
        <>
            <Card elevation={0} className="side-card">
                <CardContent>
                    <div className="text-center mb-3 ">
                        <img alt="" src={Logo} />
                        <br />
                        <h4>Admin</h4>
                    </div>
                    <div className="mt-2">
                        <Link to={"/dashboard"} className="link" >
                            <div className={location.pathname.includes("dashboard") ? "mt-2 mx-4 d-flex nav-link active-link-text" : " d-flex mt-2 mx-4  nav-link "}>
                                <AutoAwesomeMosaicIcon />
                                <h6 className="ms-2 dash_text ">Dashboard</h6>
                            </div>
                        </Link>

                    </div>
                    <div >
                        <Link to={"/banners"} className="link" >
                            <div className={location.pathname.includes("anner") ? "mt-2 mx-4  d-flex nav-link active-link-text" : "mt-2 d-flex mx-4  nav-link "}>
                                <PermMediaIcon />
                                <h6 className="ms-2 dash_text">Banners</h6>
                            </div>
                        </Link>
                    </div>
                 
                </CardContent>
            </Card>
        </>
    )
}
export default SideBar;