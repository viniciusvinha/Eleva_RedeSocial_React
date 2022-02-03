import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Inicio.css';
import { useHistory } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Inicio() {

    let history = useHistory();
    

    return (
        <>
            <Grid className='font-link' container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} className='caixa1'>
                    <Box>
                        <img src={require('../../assets/img/Logo Completo (5).png')} alt="" className='img-inicio'/>
                    </Box>
                    <Box className='paddingTop2'>
                        <Typography variant='h6' color='textPrimary' component='h3' align='center' className='texto-inicio' style={{color: "#FFFFFF"}}>Aqui uma frase de efeito muito legal</Typography>
                        <Typography variant='h6' color='textPrimary' component='h3' align='center' className='texto-inicio' style={{color: "#FFFFFF"}}>sobre mulheres e tecnologia!</Typography>
                    </Box>
                </Grid>
                <Grid container className='caixa2'> 
                    <Grid item xs={6}>
                            <Box>
                                <img src={require('../../assets/img/logo (3).png')} alt="" className='logo-sobre' />
                            </Box>
                            <Box className='texto-sobre1 '>
                                <Typography variant='h5' className='font-link'>A rede social ELEVA é uma iniciativa dos estudantes do bootcamp da Generation, desenvolvida exclusivamente para mulheres e que têm como objetivo o fortalecimento, o compartilhamento de experiências e informações, a conexão ao mercado de trabalho através de divulgações e a valorização da mulher no mercado tecnológico.</Typography>
                            </Box>
                            <Box className='texto-sobre1'>
                                <Typography variant='subtitle2'>"Precisamos nos esforçar para "erguer-nos enquanto subimos". Em outras palavras, devemos subir de modo a garantir que todas as nossas irmãs, irmãos, subam conosco." - Angela Davis</Typography>
                            </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={require('../../assets/img/img-inicio.png')} alt="" className='img-sobre1' />
                    </Grid>
                </Grid>

                <Grid container className='caixa3'>
                    <Grid item xs={4} className='padding'>
                        <Typography variant='h5' gutterBottom className='titulo-sobre font-link'>Lugar de mulher é na Tech!</Typography>
                        <Typography variant='body1' className='paddingTop2 fonte font-link'>As estáticas atuais da mulher no mercado de trabalho apontam que a participação feminina na área de tecnologia cresceu 60% nos últimos 5 anos, de acordo com o CAGED. </Typography>
                        <Typography variant='body1' className='paddingTop2 fonte font-link'>Se a mudança continuar nesse ritmo, o Instituto de Pesquisa Econômica Aplicada (Ipea) acredita que, em dez anos, a participação das mulheres no mercado de trabalho brasileiro deve crescer mais do que a masculina em muitos segmentos — a ciência e a tecnologia são alguns deles.</Typography>
                        <Typography variant='body1' className='paddingTop2 fonte font-link'>Assim, é de extrema importância uma rede de compartilhamento como a Eleva, para que juntas possam alavancar esses índices. </Typography>
                        <Typography variant='body1' className='paddingTop2 fonte'>Então, mulher, bora conquistar seu espaço, fortalecer as relações, transformar vidas e botar diversidade na Tech!</Typography>
                    </Grid>
                    <Grid item xs={4} className='padding' justifyContent='center'>
                        <Typography variant='subtitle2' align='center' className='titulo-sobre font-link'>Índices do CAGED sobre o crescimento da participação das mulheres na tecnologia.</Typography>
                        <img src={require('../../assets/img/IBGE.jpg')} alt="" className='grafico2' />
                        
                    </Grid>
                    <Grid item xs={4} className='padding'>
                        <Typography variant='subtitle2' align='center' className='titulo-sobre'>Estatísticas do IBGE de mulheres na tecnologia no ano de 2018</Typography>
                        <img src={require('../../assets/img/grafico2.jpeg')} alt="" className='grafico1' />
                        
                    </Grid>
                </Grid>
                <Grid container className='equipe' xs={12}>
                    <Box className="box-equipe">
                        <Typography variant='h5' className='titulo-equipe'>Desenvolvedores</Typography>
                        <img src={require('../../assets/img/logo-equipe.png')} alt="" className='logo-equipe'/>
                    </Box>
                </Grid>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" paddingX='30px' className="caixa4">
                        <Box className='flex-equipe'>
                            <Typography variant='body1' align='center' className='nome'>Augusto Alves</Typography>
                            <img src={require('../../assets/img/augusto.jpeg')} alt="" className='foto-equipe'/>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe paddingTop5'>Desenvolvedor FullStack</Typography>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe'>Java | React</Typography>
                            <Typography variant='body2' align='center' className='descricao-equipe paddingTop5'>Uma frase legal, formação, experiência, algo que gosta sei lá. Uma frase legal, formação,
                            experiência, algo que gosta sei lá Uma frase legal, formação, experiência, algo que gosta sei lá</Typography>
                                <Box>
                                    <a href="" target="_blank">
                                        <LinkedInIcon className="icon"/>
                                    </a>
                                    <a href="https://github.com/augustoalvesper" target="_blank">
                                        <GitHubIcon className="icon"/>
                                    </a>
                                </Box>
                        </Box>
                        <Box className='flex-equipe'>
                            <Typography variant='body1' align='center' className='nome'>Fiama Vidal</Typography>
                            <img src={require('../../assets/img/fiama.jpeg')} alt="" className='foto-equipe'/>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe paddingTop5'>Desenvolvedora FullStack</Typography>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe'>Java | React</Typography>
                            <Typography variant='body2' align='center' className='descricao-equipe paddingTop5'>Uma frase legal, formação, experiência, algo que gosta sei lá. Uma frase legal, formação,
                            experiência, algo que gosta sei lá Uma frase legal, formação, experiência, algo que gosta sei lá</Typography>
                            <Box>
                                <a href="https://www.linkedin.com/in/fiama-vidal-b31692138/" target="_blank">
                                    <LinkedInIcon className="icon"/>
                                </a>
                                <a href="https://github.com/Fividal1" target="_blank">
                                    <GitHubIcon className="icon"/>
                                </a>
                            </Box>
                        </Box>
                        <Box className='flex-equipe'>
                            <Typography variant='body1' align='center' className='nome'>Lara Daniel</Typography>
                            <img src={require('../../assets/img/lara1.jpg')} alt="" className='foto-equipe'/>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe paddingTop5'>Desenvolvedora FullStack</Typography>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe'>Java | React</Typography>
                            <Typography variant='body2' align='center' className='descricao-equipe paddingTop5'>Uma frase legal, formação, experiência, algo que gosta sei lá. Uma frase legal, formação,
                            experiência, algo que gosta sei lá Uma frase legal, formação, experiência, algo que gosta sei lá</Typography>
                            <Box>
                                <a href="https://www.linkedin.com/in/laradaniel1/" target="_blank">
                                    <LinkedInIcon className="icon"/>
                                </a>
                                <a href="https://github.com/laradaniel" target="_blank">
                                    <GitHubIcon className="icon"/>
                                </a>
                            </Box>
                        </Box>
                        <Box className='flex-equipe'>
                            <Typography variant='body1' align='center' className='nome'>Lucas Diniz</Typography>
                            <img src={require('../../assets/img/lucas.jpeg')} alt="" className='foto-equipe'/>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe paddingTop5'>Desenvolvedor FullStack</Typography>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe'>Java | React</Typography>
                            <Typography variant='body2' align='center' className='descricao-equipe paddingTop5'>Uma frase legal, formação, experiência, algo que gosta sei lá. Uma frase legal, formação,
                            experiência, algo que gosta sei lá. Uma frase legal, formação, experiência, algo que gosta sei lá</Typography>
                            <Box>
                                <a href="https://www.linkedin.com/in/lucas-diniz-7ab5aa149/" target="_blank">
                                    <LinkedInIcon className="icon"/>
                                </a>
                                <a href="https://github.com/LucasCdiniz" target="_blank">
                                    <GitHubIcon className="icon"/>
                                </a>
                            </Box>
                        </Box>
                        <Box className='flex-equipe'>
                            <Typography variant='body1' align='center' className='nome'>Vinicius Vinha</Typography>
                            <img src={require('../../assets/img/vinicius.jpeg')} alt="" className='foto-equipe'/>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe paddingTop5'>Desenvolvedor FullStack</Typography>
                            <Typography variant='subtitle2' align='center' className='descricao-equipe'>Java | React</Typography>
                            <Typography variant='body2' align='center' className='descricao-equipe paddingTop5'>Uma frase legal, formação, experiência, algo que gosta sei lá. Uma frase legal,
                            formação, experiência, algo que gosta sei lá. Uma frase legal, formação, experiência, algo que gosta sei lá</Typography>
                            <Box>
                                <a href="https://www.linkedin.com/in/vinicius-vinha/" target="_blank">
                                    <LinkedInIcon className="icon"/>
                                </a>
                                <a href="https://github.com/viniciusvinha" target="_blank">
                                    <GitHubIcon className="icon"/>
                                </a>
                            </Box>
                        </Box>
                    </Box>
            </Grid>
        </>
    );
}

export default Inicio;