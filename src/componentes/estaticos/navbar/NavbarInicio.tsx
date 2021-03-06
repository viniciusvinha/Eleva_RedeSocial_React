import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './NavbarInicio.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';

function NavbarInicio() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert("Usuário deslogado")
        history.push('/login')
    }

    function goLogin() {
        dispatch(addToken(''));
        history.push('/login')
    }

    function goLogon() {
        dispatch(addToken(''));
        history.push('/cadastrousuario')
    }


    var navbarinicioComponent;

    if (token == "") {
        navbarinicioComponent = <AppBar position="fixed" style={{ backgroundColor: "#EBEBEB" }}>
            <Toolbar variant="dense">
                <Box width="100%" display="flex" justifyContent="space-between">
                    <Box className='cursor'>
                        <Link to='/inicio'>
                            <img src={require('../../../assets/img/icone-eleva (3).png')} alt="" width="50px" height="50px" margin-right="10px" />
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent='flex-end' alignItems='center'>
                        <Box mx={1} className='cursor' onClick={goLogin}>
                            <Button type='submit' variant="contained" className='botaoentrar' style={{ backgroundColor: " #EBEBEB", color: '#4A2B87', borderRadius: '15px' }} >
                                Entrar
                            </Button>
                        </Box>
                        <Box mx={1} className='cursor' onClick={goLogon}>
                            <Button className='botaocadastro' type='submit' variant="contained" style={{ backgroundColor: "#EBEBEB", color: '#4A2B87', borderRadius: '15px' }} >
                                Cadastrar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarinicioComponent}
        </>
    )
}

export default NavbarInicio;