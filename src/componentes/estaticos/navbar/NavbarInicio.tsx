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
        navbarinicioComponent = <AppBar position="static" style={{ backgroundColor: "#EBEBEB" }}>
            <Toolbar variant="dense">
                <Box className='cursor'>
                    <img src={require('../../../assets/img/icone-eleva (3).png')} alt="" width="60px" height="60px" margin-right="10px" />
                </Box>


                <Box width="100%" display="flex" justifyContent="space-between">
                    <Box display="flex">
                        <Link to="/inicio" className="text-decorator-none style2">
                            <Box mx={1} className='cursor' width="100%" display="flex" justifyContent="space-between" style={{backgroundColor: " #EBEBEB", color:'#4A2B87'}}>
                                <Typography variant="h6" color="inherit">
                                    Inicio
                                </Typography>
                            </Box>
                        </Link>
                        
                        <Link to="/sobre" className="text-decorator-none style3" >
                            <Box mx={1} className='cursor' width="100%" display="flex" justifyContent="space-between" style={{backgroundColor: " #EBEBEB", color:'#4A2B87'}}>
                                <Typography variant="h6" >
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/equipe" className="text-decorator-none style3" >
                            <Box mx={1} className='cursor' width="100%" display="flex" justifyContent="space-between" style={{backgroundColor: " #EBEBEB", color:'#4A2B87'}}>
                                <Typography variant="h6" color="inherit">
                                    Equipe
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/contato" className="text-decorator-none style3" >
                            <Box mx={1} className='cursor' width="100%" display="flex" justifyContent="space-between" style={{backgroundColor: " #EBEBEB", color:'#4A2B87'}}>
                                <Typography variant="h6" color="inherit">
                                    Contato
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                    <Box mx={1} className='cursor' onClick={goLogin}>

                        <Button type='submit' variant="contained" className= 'botaoentrar' style={{ backgroundColor: " #EBEBEB", color: '#4A2B87' }} >

                            Entrar
                        </Button>

                        
                    </Box>

                    <Box mx={1} className='cursor' onClick={goLogon}>

                        <Button className= 'botaocadastro' type='submit' variant="contained" style={{ backgroundColor: "#EBEBEB", color: '#4A2B87' }} >

                            Cadastrar
                        </Button>

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