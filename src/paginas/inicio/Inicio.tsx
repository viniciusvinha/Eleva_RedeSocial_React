import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Inicio.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Inicio() {

    let history = useHistory();
    
    

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} className='caixa1'>
                    <Box>
                        <img src={require('../../assets/img/Logo Completo (9).png')} alt="" className='img-inicio' />
                    </Box>
                    <Box>
                        <Typography variant='h6' color='textPrimary' component='h3' align='center' style={{color: "#4A2B87"}}>Aqui uma frase de efeito muito legal</Typography>
                        <Typography variant='h6' color='textPrimary' component='h3' align='center' style={{color: "#4A2B87"}}>sobre mulheres e tecnologia!</Typography>
                    </Box>
                </Grid>
                <Grid container className='caixa2'> 
                    <Grid item xs={6}>
                            <Box>
                                <img src={require('../../assets/img/logo (3).png')} alt="" className='logo-sobre' />
                            </Box>
                            <Box className='texto-sobre1'>
                                <Typography variant='h3'>Comunidade para mulheres compartilharem dúvidas, experiências e dicas!</Typography>
                            </Box>
                            <Box className='texto-sobre1'>
                                <Typography variant='body1'>"Neque porro , consectetur, adipisci velishaust, laheuiro..."</Typography>
                            </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={require('../../assets/img/img-inicio.png')} alt="" className='img-sobre1' />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Inicio;