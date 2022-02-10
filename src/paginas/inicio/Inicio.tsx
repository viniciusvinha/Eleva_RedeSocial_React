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
                        <Typography variant='h6' color='textPrimary' component='h3' align='center' className='texto-inicio' style={{color: "#FFFFFF"}}>A comunidade que conecta mulheres,</Typography>
                        <Typography variant='h6' color='textPrimary' component='h3' align='center' className='texto-inicio' style={{color: "#FFFFFF"}}> informação e tecnologia!</Typography>
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
                            <Typography variant='body2'  className='descricao-equipe paddingTop5 paddingY'>Desde o menino curioso, ao adulto que ama aprender coisas novas e ama a evolução 
                            das coisas. "Só sei que nada sei" é a frase que mais me define. Minha principal competência é a comunicação e a mentalidade de crescimento é o meu combustível.
                            </Typography>
                                <Box>
                                    <a href="https://www.linkedin.com/in/augusto-vicente-alves-a05899224/" target="_blank">
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
                            <Typography variant='body2' className='descricao-equipe paddingTop5 paddingY'>Oie! Sou Fiama, tenho 29 anos de idade, além de Dev. também sou advogada, nascida e 
                            criada na região periférica de São Paulo. Minha paixão pela tecnologia veio quando tive que aprofundar meus conhecimentos em tecnologia para um TCC na Usp; a partir
                             dali, não parei mais, também amo desafios e, por isso, também, eu e a tech demos match.</Typography>
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
                            <Typography variant='body2' className='descricao-equipe paddingTop5 paddingY'>Olá, sou a Lara, moro na zona leste de São Paulo. Bastante curiosa, o desenvolvimento 
                            de software ganhou o meu coração, especialmente por ser um espaço de aprendizado constante, desafiador e conectar diversas outras áreas do conhecimento. Através do 
                            Bootcamp da Generation tive meu primeiro contato com essa área.  Acredito na tecnologia como solução para diversos problemas que enfrentamos hoje.</Typography>
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
                            <Typography variant='body2' className='descricao-equipe paddingTop5 paddingY'>Olá, eu sou o Lucas, sou apaixonado por vídeo games, filmes, bonecos e música. 
                            Formado em Ciência da Computação, foi na faculdade que fui apresentado a todo este universo da tecnologia e da programação e 
                            é com o Java que sempre tive uma enorme satisfação e engrandecimento pessoal. Que a força esteja com você!</Typography>
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
                            <Typography variant='body2'  className='descricao-equipe paddingTop5 paddingY'>Atualmente com meus 23 anos, sempre tive em mente que a minha contribuição para o mundo 
                            seria através da tecnologia. Bem como seu impacto e capacidade de transformação. Sou uma pessoa extremamente disposta a ajudar, 
                            contribuir e solucionar problemas. Atualmente estudando Ciência da Computação e Dev Full Stack Java, pretendo consolidar e solidificar meus 
                            conhecimentos, para de fato iniciar minha jornada neste mundo repleto de oportunidades.</Typography>
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