import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import useLocalStorage from "react-use-localstorage";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service"

import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

// Crie seu próprio tema:
const theme = createTheme({
  palette: {
    primary: {
      light: "#3c7000",
      main: "#3c7000",
      dark: "#3c7000",
      contrastText: "#3c7000",
    },
  },
});


function Login() {

  let history = useNavigate();

  const [token, setToken] = useLocalStorage('token');

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    email: '',
    senha: '',
    token: ''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (token != '') {
      history("/home")
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/usuarios/logar`, userLogin, setToken)

      alert("Usuário logado com sucesso!")
    }
    catch (error) {
      alert("Dados dos usuário inconsistentes. Erro ao logar!")
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className="fundo4">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography variant="h3" gutterBottom component="h3" align="center" className="texto1"> Entrar</Typography>

            <MuiThemeProvider theme={theme}>
              <TextField value={userLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="email" label="email" variant="outlined" name="E-mail" margin="normal" fullWidth></TextField>
              <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="Senha" margin="normal" type="password" fullWidth></TextField>
            </MuiThemeProvider>

            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" className="btn">
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
            </Box>
            <Link to="/cadastrousuario" className="text-decoration">
              <Typography variant="subtitle1" gutterBottom align="center" className="cadastro">Cadastre-se</Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem">

      </Grid>
    </Grid>
  );
}

export default Login;