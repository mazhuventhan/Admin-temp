


// import React, { useEffect, useState } from "react";
// import SideBar from "../components/Sidebar";
// import { Button, ButtonGroup, Card, CardContent, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import EditIcon from '@mui/icons-material/Edit';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import "../../src/custom.css";
// import Logout from "../components/Logout";
// import Table from "../components/Table";
// import Swal from "sweetalert2";
// import Loader from "../components/Loader";
// import BackdropLoader from "../components/backDropLoader";

// const Banners = () => {
//     const [isOpen, setIsopen] = useState(true);
//     const [isViewOpen, setIsViewOpen] = useState(false);
//     const [isEditOpen, setIsEditOpen] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [selectedRow, setSelectedRow] = useState(null);

//     useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 2000);
//     }, [])


//     const handleOpen = () => {
//         setIsopen(!isOpen);
//     }

//     const handleRemove = () => {
//         Swal.fire({
//             text: 'Are you sure want to Delete?',
//             showConfirmButton: true,
//             showCancelButton: true,
//             confirmButtonText: "OK",
//             cancelButtonText: "Cancel",
//             icon: 'warning'
//         }
//         ).then((result) => {
//             if (result.isConfirmed) {
//                 Swal.fire('', 'Removed Successfully', 'success').then((res) => {
//                     // window.location.replace("/");
//                 });
//             }
//         }
//         )
//     }

//     const handleViewOpen = (row) => {
//         setSelectedRow(row);
//         setIsViewOpen(true);
//     }

//     const handleViewClose = () => {
//         setIsViewOpen(false);
//         setSelectedRow(null);
//     }

//     const handleEditOpen = (row) => {
//         setSelectedRow(row);
//         setIsEditOpen(true);
//     }

//     const handleEditClose = () => {
//         setIsEditOpen(false);
//         setSelectedRow(null);
//     }

//     const handleEditSave = () => {
//         // Logic to save the edited data
//         setIsEditOpen(false);
//         setSelectedRow(null);
//         Swal.fire('', 'Saved Successfully', 'success');
//     }

//     const columns = [
//         { field: 'id', headerName: 'ID', sortable: false, flex: 1, disableColumnMenu: true },
//         { field: 'firstName', headerName: 'First name', flex: 1, sortable: false, disableColumnMenu: true },
//         { field: 'lastName', headerName: 'Last name', flex: 1, sortable: false, disableColumnMenu: true },
//         {
//             sortable: false,
//             field: 'age',
//             flex: 1,
//             headerName: 'Age',
//             disableColumnMenu: true
//         },
//         {
//             field: 'fullName',
//             flex: 1,
//             headerName: 'Full name',
//             description: 'This column has a value getter and is not sortable.',
//             sortable: false,
//             disableColumnMenu: true,
//             valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//         },
//         {
//             field: 'Action',
//             flex: 1,
//             headerName: 'Action',
//             disableColumnMenu: true,
//             sortable: false,
//             renderCell: (params) => {
//                 return (
//                     <ButtonGroup>
//                         <IconButton onClick={() => handleEditOpen(params.row)}><EditIcon /></IconButton>
//                         <IconButton onClick={() => handleViewOpen(params.row)}><VisibilityIcon /></IconButton>
//                         <IconButton onClick={handleRemove}><DeleteIcon /></IconButton>
//                     </ButtonGroup>
//                 )
//             }
//         },
//     ];

//     const rows = [
//         { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//         { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//         { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//         { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//         { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//         { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//         { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//         { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//         { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//     ];

//     return (
//         <>
//             <div className="container-fluid p-0" style={{ overflow: 'hidden' }}>
//                 <div className="row">
//                     <div className={`${isOpen ? "col-lg-2 mob-nav p-0" : "d-none"} sidebar_layout`}>
//                         <SideBar />
//                     </div>
//                     <div className={`${isOpen ? "col-lg-10 col-12" : "col-12 w-100"} dashboard_card main_layout`} >
//                         <div className="d-flex w-100 justify">
//                             <IconButton className="web-btn" onClick={handleOpen}>
//                                 <MenuIcon />
//                             </IconButton>
//                             <IconButton className="mob-btn" data-bs-toggle="offcanvas" data-bs-target="#mob-canvas" aria-controls="mob-canvas">
//                                 <MenuIcon />
//                             </IconButton>
//                             <Logout />
//                         </div>
//                         {/* Page Contents */}
//                         {isLoading ?
//                             // <BackdropLoader/>
//                             <Loader /> :
//                             <div className="row mt-3 main">
//                                 <div className="row sub-menu">
//                                     <div className="col-12">
//                                         <Card>
//                                             <CardContent>
//                                                 <div className="text-end mb-4">
//                                                     <Button className="btn" onClick={() => window.location.replace('/addBanner')} variant="contained" endIcon={<AddIcon />}>Add New</Button>
//                                                 </div>
//                                                 <div className="text-start">
//                                                     <h4 className="fw-bold">Banners</h4>
//                                                 </div>
//                                                 <Table rows={rows} columns={columns} />
//                                             </CardContent>
//                                         </Card>
//                                     </div>
//                                 </div>
//                             </div>
//                         }
//                     </div>
//                 </div>
//             </div>
//             <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="mob-canvas" aria-labelledby="mob-canvaslabel">
//                 <div className="offcanvas-header">
//                     <IconButton data-bs-dismiss="offcanvas" aria-label="Close">
//                         <CloseIcon style={{ height: '40px', width: '40px', color: 'white' }} />
//                     </IconButton>
//                 </div>
//                 <div className="offcanvas-body p-0">
//                     <SideBar />
//                 </div>
//             </div>
//             {/* View Modal */}
//             <Dialog open={isViewOpen} onClose={handleViewClose}>
//                 <DialogTitle>View Banner</DialogTitle>
//                 <DialogContent>
//                     <div>
//                         <p><strong>ID:</strong> {selectedRow?.id}</p>
//                         <p><strong>First Name:</strong> {selectedRow?.firstName}</p>
//                         <p><strong>Last Name:</strong> {selectedRow?.lastName}</p>
//                         <p><strong>Age:</strong> {selectedRow?.age}</p>
//                     </div>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleViewClose}>Close</Button>
//                 </DialogActions>
//             </Dialog>
//             {/* Edit Modal */}
//             <Dialog open={isEditOpen} onClose={handleEditClose}>
//                 <DialogTitle>Edit Banner</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         margin="dense"
//                         label="First Name"
//                         type="text"
//                         fullWidth
//                         value={selectedRow?.firstName || ''}
//                         onChange={(e) => setSelectedRow({ ...selectedRow, firstName: e.target.value })}
//                     />
//                     <TextField
//                         margin="dense"
//                         label="Last Name"
//                         type="text"
//                         fullWidth
//                         value={selectedRow?.lastName || ''}
//                         onChange={(e) => setSelectedRow({ ...selectedRow, lastName: e.target.value })}
//                     />
//                     <TextField
//                         margin="dense"
//                         label="Age"
//                         type="number"
//                         fullWidth
//                         value={selectedRow?.age || ''}
//                         onChange={(e) => setSelectedRow({ ...selectedRow, age: e.target.value })}
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button variant="contained" className="rounded-100" onClick={handleEditClose}>Cancel</Button>
//                     <Button className="btn" variant="contained" onClick={handleEditSave}>Save</Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// }
// export default Banners;


import React, { useEffect, useState } from "react";
import SideBar from "../components/Sidebar";
import { Button, ButtonGroup, Card, CardContent, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../../src/custom.css";
import Logout from "../components/Logout";
import Table from "../components/Table";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import BackdropLoader from "../components/backDropLoader";

const Banners = () => {
    const [isOpen, setIsopen] = useState(true);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRow, setSelectedRow] = useState(null);
    const [filter, setFilter] = useState({ id: '', firstName: '', lastName: '', age: '' });
    const [filteredRows, setFilteredRows] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        const newFilteredRows = rows.filter(row => {
            return (
                row.id.toString().includes(filter.id) &&
                (row.firstName?.toLowerCase().includes(filter.firstName.toLowerCase()) || '') &&
                (row.lastName?.toLowerCase().includes(filter.lastName.toLowerCase()) || '') &&
                (filter.age === '' || row.age?.toString().includes(filter.age))
            );
        });
        setFilteredRows(newFilteredRows);
    }, [filter]);

    const handleOpen = () => {
        setIsopen(!isOpen);
    };

    const handleRemove = () => {
        Swal.fire({
            text: 'Are you sure want to Delete?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            icon: 'warning'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('', 'Removed Successfully', 'success').then((res) => {
                    // window.location.replace("/");
                });
            }
        });
    };

    const handleViewOpen = (row) => {
        setSelectedRow(row);
        setIsViewOpen(true);
    };

    const handleViewClose = () => {
        setIsViewOpen(false);
        setSelectedRow(null);
    };

    const handleEditOpen = (row) => {
        setSelectedRow(row);
        setIsEditOpen(true);
    };

    const handleEditClose = () => {
        setIsEditOpen(false);
        setSelectedRow(null);
    };

    const handleEditSave = () => {
        // Logic to save the edited data
        setIsEditOpen(false);
        setSelectedRow(null);
        Swal.fire('', 'Saved Successfully', 'success');
    };

    const columns = [
        { field: 'id', headerName: 'ID', sortable: false, flex: 1, disableColumnMenu: true },
        { field: 'firstName', headerName: 'First name', flex: 1, sortable: false, disableColumnMenu: true },
        { field: 'lastName', headerName: 'Last name', flex: 1, sortable: false, disableColumnMenu: true },
        {
            sortable: false,
            field: 'age',
            flex: 1,
            headerName: 'Age',
            disableColumnMenu: true
        },
        {
            field: 'fullName',
            flex: 1,
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            disableColumnMenu: true,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        {
            field: 'Action',
            flex: 1,
            headerName: 'Action',
            disableColumnMenu: true,
            sortable: false,
            renderCell: (params) => {
                return (
                    <ButtonGroup>
                        <IconButton onClick={() => handleEditOpen(params.row)}><EditIcon /></IconButton>
                        <IconButton onClick={() => handleViewOpen(params.row)}><VisibilityIcon /></IconButton>
                        <IconButton onClick={handleRemove}><DeleteIcon /></IconButton>
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

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    return (
        <>
            <div className="container-fluid p-0" style={{ overflow: 'hidden' }}>
                <div className="row">
                    <div className={`${isOpen ? "col-lg-2 mob-nav p-0" : "d-none"} sidebar_layout`}>
                        <SideBar />
                    </div>
                    <div className={`${isOpen ? "col-lg-10 col-12" : "col-12 w-100"} dashboard_card main_layout`} >
                        <div className="d-flex w-100 justify">
                            <IconButton className="web-btn" onClick={handleOpen}>
                                <MenuIcon />
                            </IconButton>
                            <IconButton className="mob-btn" data-bs-toggle="offcanvas" data-bs-target="#mob-canvas" aria-controls="mob-canvas">
                                <MenuIcon />
                            </IconButton>
                            <Logout />
                        </div>
                        {/* Page Contents */}
                        {isLoading ?
                            // <BackdropLoader/>
                            <Loader /> :
                            <div className="row mt-3 main">
                                <div className="row sub-menu">
                                    <div className="col-12">
                                        <Card>
                                            <CardContent>
                                                <div className="text-end mb-4">
                                                    <Button className="btn" onClick={() => window.location.replace('/addBanner')} variant="contained" endIcon={<AddIcon />}>Add New</Button>
                                                </div>
                                                <div className="text-start">
                                                    <h4 className="fw-bold">Banners</h4>
                                                </div>
                                                <Accordion elevation={3} >
                                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                        <h5>Filter Options</h5>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <div className="row mb-3">
                                                            <div className="col-md-3">
                                                                <TextField
                                                                    label="Filter by ID"
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    name="id"
                                                                    value={filter.id}
                                                                    onChange={handleFilterChange}
                                                                />
                                                            </div>
                                                            <div className="col-md-3">
                                                                <TextField
                                                                    label="Filter by First Name"
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    name="firstName"
                                                                    value={filter.firstName}
                                                                    onChange={handleFilterChange}
                                                                />
                                                            </div>
                                                            <div className="col-md-3">
                                                                <TextField
                                                                    label="Filter by Last Name"
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    name="lastName"
                                                                    value={filter.lastName}
                                                                    onChange={handleFilterChange}
                                                                />
                                                            </div>
                                                            <div className="col-md-3">
                                                                <TextField
                                                                    label="Filter by Age"
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    name="age"
                                                                    value={filter.age}
                                                                    onChange={handleFilterChange}
                                                                />
                                                            </div>
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Table rows={filteredRows} columns={columns} />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="mob-canvas" aria-labelledby="mob-canvaslabel">
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
            <Dialog open={isViewOpen} onClose={handleViewClose}>
                <DialogTitle>View Banner</DialogTitle>
                <DialogContent>
                    <div>
                        <p><strong>ID:</strong> {selectedRow?.id}</p>
                        <p><strong>First Name:</strong> {selectedRow?.firstName}</p>
                        <p><strong>Last Name:</strong> {selectedRow?.lastName}</p>
                        <p><strong>Age:</strong> {selectedRow?.age}</p>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleViewClose}>Close</Button>
                </DialogActions>
            </Dialog>
            {/* Edit Modal */}
            <Dialog open={isEditOpen} onClose={handleEditClose}>
                <DialogTitle>Edit Banner</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="First Name"
                        type="text"
                        fullWidth
                        value={selectedRow?.firstName || ''}
                        onChange={(e) => setSelectedRow({ ...selectedRow, firstName: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Last Name"
                        type="text"
                        fullWidth
                        value={selectedRow?.lastName || ''}
                        onChange={(e) => setSelectedRow({ ...selectedRow, lastName: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Age"
                        type="number"
                        fullWidth
                        value={selectedRow?.age || ''}
                        onChange={(e) => setSelectedRow({ ...selectedRow, age: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" className="rounded-100" onClick={handleEditClose}>Cancel</Button>
                    <Button className="btn" variant="contained" onClick={handleEditSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
export default Banners;


