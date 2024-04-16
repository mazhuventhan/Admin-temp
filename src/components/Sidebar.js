import React from "react";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
const SideBar = () => {
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
                        <div className="mt-3 d-flex align-center">
                            <AutoAwesomeMosaicIcon />
                            <h6 className="ms-2">Dashboard</h6>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default SideBar;