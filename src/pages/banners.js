import React, { useEffect, useState } from "react";
import SideBar from "../components/Sidebar";
import { Button, ButtonGroup, Card, CardContent, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import "../../src/custom.css";
import Logout from "../components/Logout";
import Table from "../components/Table";
import Swal from "sweetalert2";
import { useMyContext } from "../context/context";
import Modal from 'react-bootstrap/Modal';
import Loader from "../components/Loader";
const Banners = () => {
    const [isOpen, setIsopen] = useState(true);
    const [isView, setIsView] = useState(false);
    const data = useMyContext();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])
    const handleOpen = () => {
        setIsopen(!isOpen);
    }
    const handleRemove = () => {
        Swal.fire({
            text: 'Are you sure want to Delete?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            icon: 'warning'
        }
        ).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('', 'Removed Successfully', 'success').then((res) => {
                    // window.location.replace("/");
                });
            }
        }
        )
    }
    const handleViewOpen = () => setIsView(true);
    const handleClose = () => {
        setIsView(!isView);
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 120, sortable: false, disableColumnMenu: true },
        { field: 'firstName', headerName: 'First name', width: 130, sortable: false, disableColumnMenu: true },
        { field: 'lastName', headerName: 'Last name', width: 130, sortable: false, disableColumnMenu: true },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90, disableColumnMenu: true
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160, disableColumnMenu: true,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        {
            field: 'Action',
            headerName: 'Action',
            type: 'number',
            width: 190, disableColumnMenu: true,
            renderCell: (params) => {
                return (
                    <ButtonGroup>
                        <IconButton><EditIcon /></IconButton>
                        <IconButton onClick={handleViewOpen} ><VisibilityIcon /></IconButton>
                        <IconButton onClick={handleRemove} ><DeleteIcon /></IconButton>
                    </ButtonGroup>
                )
            }
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
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
                        {isLoading ?
                            <Loader /> :
                            <Card>
                                <CardContent>
                                    <div className="text-end mb-4">
                                        <Button onClick={() => window.location.replace('/newbanner')} variant="contained" endIcon={<AddIcon />} >Add New</Button>
                                    </div>
                                    <Table rows={rows} columns={columns} />
                                </CardContent>
                            </Card>
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
            {/* View Modal */}
            <Modal
                show={isView}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>View</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>

        </>
    )
}
export default Banners;