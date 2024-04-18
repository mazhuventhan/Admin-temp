import React, { useState } from "react";
import SideBar from "../components/Sidebar";
import { Button, Card, CardContent, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "../../src/custom.css";
import Logout from "../components/Logout";
const AddBanner = () => {
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
                            <Logout />
                        </div>
                        {/* Page Contents */}
                        <div className="row mt-3 main">
                            <div className="col-12">
                                <Card>
                                    <CardContent>
                                        <div className="text-start"><h4>Add New Banner</h4></div>
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <div className="mt-3">
                                                        <label>Name</label>
                                                        <input className="form-control" />
                                                    </div>
                                                    <div className="mt-3">
                                                        <label>Choose Image</label>
                                                        <input type="file" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <div className="mt-3">
                                                        <label>Label</label>
                                                        <input className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className="mt-3" style={{ textTransform: 'none' }} type="submit" variant="contained" >Submit</Button>

                                        </form>
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
export default AddBanner;