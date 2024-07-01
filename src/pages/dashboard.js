import React, { useEffect, useState } from "react";
import SideBar from "../components/Sidebar";
import { Card, CardContent, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "../../src/custom.css";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Logout from "../components/Logout";
import Loader from "../components/Loader";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [isOpen, setIsopen] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const handleOpen = () => {
        setIsopen(!isOpen);
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])
    return (
        <>


            <div className="container-fluid p-0 " style={{ overflow: 'hidden' }}>
                <div className="row">
                    <div className={`${isOpen ? "col-lg-2  mob-nav p-0" : "d-none"} sidebar_layout`}>
                        <SideBar />
                    </div>
                    <div className={`${isOpen ? "col-lg-10 col-12  " : "col-12 w-100"} dashboard_card main_layout`} >

                        <div className="d-flex w-100 justify">
                            <IconButton className="web-btn" onClick={handleOpen} >
                                <MenuIcon />
                            </IconButton>
                            <IconButton className="mob-btn" data-bs-toggle="offcanvas" data-bs-target="#mob-canvas" aria-controls="mob-canvas">
                                <MenuIcon />
                            </IconButton>
                            <Logout />
                        </div>
                        {/* Page Contents */}
                        {isLoading ?
                            <Loader /> :
                            <div className="row mt-3 main">
                                <div class="p-5 row sub-menu">
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <Card elevation={5} className="dash_count mb-3">
                                            <Link to="/banners" style={{ textDecoration: "none",color:"white" }} >
                                                <CardContent>
                                                    <h5 class="dash_count_text">Banners</h5>
                                                    <div className="d-flex justify">
                                                        <PermMediaIcon color="white" />
                                                        <h3 class="dash_count_text">45</h3>
                                                    </div>
                                                </CardContent>
                                            </Link>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <Card elevation={5} className="dash_count mb-3">
                                            <CardContent>
                                                <h5 class="dash_count_text">Articles</h5>
                                                <div className="d-flex justify">
                                                    <AnalyticsIcon />
                                                    <h3 class="dash_count_text">45</h3>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <Card elevation={5} className="dash_count mb-3">
                                            <CardContent>
                                                <h5 class="dash_count_text">Count</h5>
                                                <div className="d-flex justify">
                                                    <AnalyticsIcon />
                                                    <h3 class="dash_count_text">45</h3>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="mob-canvas" aria-labelledby="mob-canvaslabel">
                <div className="offcanvas-header">
                    <IconButton data-bs-dismiss="offcanvas" aria-label="Close">
                        <CloseIcon style={{ height: '40px', width: '40px', color: 'white' }} />
                    </IconButton>
                </div>
                <div className="offcanvas-body p-0">
                    <SideBar />
                </div>
            </div>
        </>
    )
}
export default Dashboard;