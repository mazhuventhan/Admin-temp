import { Button, Card, CardContent, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.replace("/dashboard")
    }
    return (
        <>
            <div className="bg-dark" style={{ height: '100vh', overflow: 'hidden' }}>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 col-12 align-center" style={{ height: '100vh' }}>
                        <Card elevation={5} className="p-3 w-100">
                            <CardContent >
                                <form onSubmit={handleSubmit}>
                                    <div className="text-center">
                                        <h4>Login to continue...</h4>
                                    </div>
                                    <div className="mt-3">
                                        <TextField className="w-100" type="text" required id="outlined-basic" label="Enter email" variant="outlined" />
                                    </div>
                                    <div className="mt-3">
                                        <FormControl variant="outlined" className="w-100">
                                            <InputLabel htmlFor="outlined-adornment-password"> Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                                required
                                            />
                                        </FormControl>
                                    </div>
                                    <Button type="submit" className="w-100 mt-3" variant="contained" style={{ textTransform: 'none' }}>Submit</Button>
                                </form>
                            </CardContent>

                        </Card>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    )
}
export default Login;