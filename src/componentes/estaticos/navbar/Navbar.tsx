import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../assets/img/icone-eleva (3).png'
function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#EBEBEB'}}>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        
                        <img src={logo} alt="" width='60px' height='60px'/>

                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer",color: "black" }}>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer",color: "black" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer",color: "black" }}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer", color: "black"}}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer", color: "black" }}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;