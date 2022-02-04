import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
import {toast} from 'react-toastify';

function Navbar() {
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let history = useHistory();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/inicio')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent =  <AppBar position="static" style={{ backgroundColor: "#CB6CE6", padding: "10px" }}>
        <Toolbar variant="dense">
            <Box className='cursor'>
            <img src={require('../../../assets/img/icone-eleva (1).png')} alt="" width="50px" height="50px"/>
            </Box>


            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" paddingX={5}>
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className='cursor' width="100%" display="flex" justifyContent="space-between" style={{ color: '#FFFFFF' }}>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>

                <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className='cursor' width="100%" display="flex" justifyContent="space-between" style={{ color: '#FFFFFF' }}>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>
                
                <Link to="/temas" className="text-decorator-none">
                    <Box mx={1} className='cursor' width="100%" display="flex" justifyContent="space-between" style={{ color: '#FFFFFF' }}>
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                </Link>
                <Link to="/formularioTema" className="text-decorator-none">
                    <Box mx={1} className='cursor' width="100%" display="flex" justifyContent="space-between" style={{ color: '#FFFFFF' }}>
                        <Typography variant="h6" color="inherit">
                            Cadastrar Tema
                        </Typography>
                    </Box>
                </Link>

                </Box>

                <Box mx={1} className='cursor' onClick={goLogout}>

                    <Button type='submit' variant="contained" style={{backgroundColor: " #FFFFFF", color:'#4A2B87', borderRadius: '15px', 
                    marginBottom: "10px"}}>
                    
                            Sair
                        </Button>
                        
                </Box>

            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;