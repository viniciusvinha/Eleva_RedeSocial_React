import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import {useHistory} from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  let history = useHistory();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(()=>{
    if(token == ''){
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


  async function getTema(){
    await busca("/tema", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent style={{ color:  "#4A2B87" }}>
            <Typography color="textSecondary" gutterBottom>
            {tema.tituloTema}
            </Typography>
            <Typography variant="subtitle1" component="h2">
             {tema.descricao}
            </Typography>
            <Typography variant="subtitle1" component="h2">
             {tema.palavraChave}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="botaoAtualizar" size='small' style={{ color:  "#EBEBEB" }} >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}  >
                  <Button  variant="contained" size='small'className='botaoDeletar' style={{ color: "#4A2B87" }} >
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;