import React from "react";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { useLocation, Link } from "react-router-dom";
const SideBar = () => {
    const location = useLocation();
    return (
        <>
            <Card elevation={0} style={{ backgroundColor: 'black', color: 'white', height: '100vh' }} >
                <CardContent>
                    <div className="text-center mb-3">
                        <img alt="" src="" />
                        <br />
                        <h4>Admin</h4>
                    </div>
                    <div className="mt-4">
                        <Link to={"/dashboard"} className="link" >
                            <div className={location.pathname.includes("dashboard") ? "mt-3 d-flex nav-link active" : " d-flex mt-3 nav-link "}>
                                <AutoAwesomeMosaicIcon />
                                <h6 className="ms-2">Dashboard</h6>
                            </div>
                        </Link>

                    </div>
                    <div >
                        <Link to={"/banners"} className="link" >
                            <div className={location.pathname.includes("banners") ? "mt-3 d-flex nav-link active" : "mt-3 d-flex  nav-link "}>
                                <AutoAwesomeMosaicIcon />
                                <h6 className="ms-2">Banners</h6>
                            </div>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default SideBar;