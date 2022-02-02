import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../componentes/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';
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
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa' style={{ backgroundColor: "#EBEBEB" }}>
                <Grid  alignItems="center" item xs={3}>
                    <Box >
                    <img className= 'bordaperfil' src={require('../../assets/img/perfil.png')} alt="" width="70%" height="auto" />
                    </Box>
                    <Box display="flex" justifyContent='center' flex-direction= "column" >
                        <ModalPostagem />
                    </Box>
                </Grid>
                <Grid  flex-direction= "column" container direction="row" xs={9} className='postagens'>
                    <ListaPostagem/>
                </Grid>
                
    
            </Grid>
        </>
    );
}

export default Home;