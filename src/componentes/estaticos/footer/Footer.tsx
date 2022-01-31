import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;
    
    if(token != ""){
        footerComponent = <Grid container direction="row" spacing={2} className='footer'>
        <Grid alignItems="center" item xs={3}>
            <Box paddingLeft={13} paddingTop={4}>
                <img src={require('../../../assets/img/Logo Completo (6).png')} alt="" width="40%" height="auto"/>
            </Box>
        </Grid>
        <Grid alignItems="center" item xs={3}>
            <Box className='textoFooter'>
                <Typography variant="subtitle2">Projeto realizado durante o</Typography>
                <Typography variant="subtitle2">Bootcamp da GENERATION BRASIL</Typography>
                <Box display="flex" paddingTop={2}>
                    <Typography variant="subtitle2">Veja o ELEVA no GitHub </Typography>
                    <a href="https://github.com/viniciusvinha/Eleva_RedeSocial_React" target="_blank">
                        <GitHubIcon className="iconGit"/>
                    </a>
                </Box>
        </Box>
        </Grid>
        <Grid alignItems="center" item xs={3} >
            <Box className='textoFooter'>
                <Typography variant="subtitle2">Entre em contato no email:</Typography>
                <Typography variant="subtitle2">elevaredesocial@gmail.com</Typography>
            </Box>
        </Grid>
        <Grid alignItems="center" item xs={3}>
            <Box className='textoFooter'>
                <Typography variant="subtitle2">© 2022 Copyright: ELEVA |</Typography>
                <Typography variant="subtitle2">GENERATION BRASIL</Typography>
            </Box>
        </Grid>
    </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;