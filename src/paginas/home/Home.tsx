import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../componentes/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';


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
                        <Typography variant="h5" gutterBottom color="textPrimary"  component="h5" align="center" className='titulo'>Seja bem vindo(a), (nome)</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>(Biografia))</Typography>
                    </Box>
                    <Box display="flex-end"  justifyContent="flex-end">
                        <Box marginRight={3} flex-direction= "column">
                            <ModalPostagem />
                            <Grid  container direction="row" flex-direction= "column">
                            <Button variant="contained" className='botao'>Minhas Postagens</Button>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid  flex-direction= "column" container direction="row" xs={9} className='postagens'>
                <TabPostagem />
                </Grid>
    
            </Grid>
        </>
    );
}

export default Home;