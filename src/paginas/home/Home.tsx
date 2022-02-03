import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabPostagem from '../../componentes/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ListaPostagem from '../../componentes/postagens/listaPostagem/ListaPostagem';


function Home() {

    let history = useHistory();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")
        }
    }, [token])

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid style={{backgroundColor:"#EBEBEB"}} container spacing={3}  >
                    <Grid item xs={12} sm={12} md={3} >
                        <Box className='perfil' >
                            <img className='bordaperfil' src={require('../../assets/img/Avatar.png')} alt="" width="70%" height="auto" />
                            <Typography variant='h6' gutterBottom color='textPrimary' component='h3' align='center' className='userlogin'>
                                Eleva
                            </Typography>
                            <ModalPostagem />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} >


                        <ListaPostagem />
                    </Grid>

                    <Grid item xs={12} sm={12} md={3}>
                        <Box className='iconemulher'>
                        <Typography variant='h6' gutterBottom color='textPrimary' component='h3' align='center' className='userlogin'>
                                Siga nossas Parceiras:
                        </Typography>
                        
                            <a href="https://www.reprograma.com.br/" target="_blank">
                            <img className='bordaparceiros' src={require('../../assets/img/reprogramaParceiro.png')} alt="" width="50%" height="auto" />
                            </a>
                            <a href="https://www.programaria.org/" target="_blank">
                            <img className='bordaparceiros' src={require('../../assets/img/prograMaria2.png')} alt="" width="50%" height="auto" />
                            </a>
                            <a href="https://brazil.generation.org/" target="_blank">
                            <img className='bordaparceiros' src={require('../../assets/img/generation.png')} alt="" width="50%" height="auto" />
                            </a>
                            <a href="https://elasprogramam.com.br/" target="_blank">
                            <img className='bordaparceiros' src={require('../../assets/img/elasProgramam.png')} alt="" width="50%" height="auto" />
                            </a>
                            <a href="https://minasprogramam.com/" target="_blank">
                            <img className='bordaparceiros' src={require('../../assets/img/minasProgramam.png')} alt="" width="50%" height="auto" />
                            </a>
                            <a href="https://infopreta.com.br/" target="_blank">
                            <img className='bordaparceiros' src={require('../../assets/img/infoPreta.png')} alt="" width="50%" height="auto" />
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </>
    );
}

export default Home;