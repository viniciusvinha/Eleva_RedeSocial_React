import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' style={{backgroundColor: "#EBEBEB"}}>
            <Grid xs={6} className='imagem'>
                <Box marginLeft={10} marginTop={20}>
                    <img src={require('../../assets/img/img-login.png')} alt="" width="450px" height="350px"/>
                </Box>
            </Grid>
            <Grid alignItems='center' xs={6}>
                    <Box paddingX={31} paddingBottom={10}>
                        <img src={require('../../assets/img/Logo Completo (8).png')} alt="" width="180px" height="115px"/>
                    </Box>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h6' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entre com o seu Login:</Typography>
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary' style={{backgroundColor: "#CB6CE6"}}>
                                    Logar
                                </Button>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center' style={{color: "#4A2B87"}}>Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                            </Link>
                        </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;