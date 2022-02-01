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
                    <Box className='paddingTop2'>
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

                <Grid container className='caixa3'>
                    <Grid item xs={4} className='padding'>
                        <Typography variant='h5' gutterBottom className='titulo-sobre'>Sobre a ODS 5</Typography>
                        <Typography variant='body1' className='paddingTop2'>Dados relevantes sobre mulheres ocupando vagas como devs. Dados ocupando vagas como desenvolvedoras.</Typography>
                        <Typography variant='body1' className='paddingTop2'>Importância de incentivar a aprenderem sobre programação e ocuparem estes espaços. importância de incentivar a aprenderem sobre programação e ocuparem estes espaços.</Typography>
                        <Typography variant='body1' className='paddingTop2'>Importância de incentivar a aprenderem sobre programação e ocuparem estes espaços. importância de incentivar a aprenderem sobre programação e ocuparem estes espaços.</Typography>
                    </Grid>
                    <Grid item xs={4} className='padding'>
                        <Typography variant='subtitle2' align='center' className='titulo-sobre'>Título do Gráfico</Typography>
                        <Typography variant='body2' align='center'>subtítulo do gráfico de pizza muito interessante</Typography>
                    </Grid>
                    <Grid item xs={4} className='padding'>
                        <Typography variant='subtitle2' align='center' className='titulo-sobre'>Título do Gráfico</Typography>
                        <Typography variant='body2' align='center'>subtítulo do gráfico de barras muito interessante</Typography>
                    </Grid>
                </Grid>
                <Grid container className='caixa4'>
                    <Box className="box-equipe">
                        <Typography variant='h5' className='titulo-equipe'>Desenvolvedores</Typography>
                        <img src={require('../../assets/img/logo-equipe.png')} alt="" className='logo-equipe'/>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Inicio;