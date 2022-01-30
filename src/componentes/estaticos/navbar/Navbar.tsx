import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';

import './Navbar.css'
function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        history.push('/login')
    }
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#CB6CE6" }}>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                    <img src={require('../../../assets/img/icone-eleva (1).png')} alt="" width="40px" height="40px"/>
                    </Box>


                    <Box width="100%" display="flex" justifyContent="space-between">
                        <Box display="flex">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    cadastrar tema
                                </Typography>
                            </Box>
                        </Link>

                        </Box>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                   
                            <Button type='submit' variant="contained" style={{backgroundColor: " #EBEBEB", color:'#4A2B87'}}>
                            
                                    Sair
                                </Button>
                                
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;