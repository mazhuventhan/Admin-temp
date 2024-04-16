import React, { useState } from "react";
import SideBar from "../components/Sidebar";
import { Button, Card, CardContent, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import "../../src/custom.css";
import AnalyticsIcon from '@mui/icons-material/Analytics';
const Dashboard = () => {
    const [isOpen, setIsopen] = useState(true);
    const handleOpen = () => {
        setIsopen(!isOpen);
    }
    return (
        <>
            <div className="container-fluid p-0" style={{ overflow: 'hidden' }}>
                <div className="row">
                    <div className={isOpen ? "col-lg-2 mob-nav p-0" : "d-none"}>
                        <SideBar />
                    </div>
                    <div className={isOpen ? "col-lg-10 col-12 p-2 " : "col-12"}>
                        <div className="d-flex w-100 justify">
                            <IconButton className="web-btn" onClick={handleOpen} >
                                <MenuIcon />
                            </IconButton>
                            <IconButton className="mob-btn" data-bs-toggle="offcanvas" data-bs-target="#mob-canvas" aria-controls="mob-canvas">
                                <MenuIcon />
                            </IconButton>
                            <Button startIcon={<LogoutIcon />} >Logout</Button>
                        </div>
                        {/* Page Contents */}
                        <div className="row mt-3 main">
                            <div className="col-lg-3 col-md-6 col-12">
                                <Card elevation={5}>
                                    <CardContent>
                                        <h5>Count</h5>
                                        <div className="d-flex justify">
                                           <AnalyticsIcon/>
                                           <h3>45</h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="mob-canvas" aria-labelledby="mob-canvaslabel">
                <div className="offcanvas-header">
                    <IconButton data-bs-dismiss="offcanvas" aria-label="Close">
                        <CloseIcon style={{ height: '40px', width: '40px',color:'white' }} />
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