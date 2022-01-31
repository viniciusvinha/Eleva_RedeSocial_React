import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';

function Navbar() {
    
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

    var navbarComponent;

    if(token != ""){
        navbarComponent =  <AppBar position="static" style={{ backgroundColor: "#CB6CE6" }}>
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
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;