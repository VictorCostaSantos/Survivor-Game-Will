import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import { Box } from '@mui/material';
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
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


function CadastroUsuario() {

    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            tipo: ""
        }
    )

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            tipo: ""
        }
    )

    useEffect(() => {
        if (userResult.id != 0) {
            history("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuário cadastrado com sucesso!')
        }
        else {
            alert('Dados inconsistentes. Por favor, verifique as informações do cadastro.')
        }
    }

    return (

        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={12} alignItems='center'>
                <Typography variant='h3' gutterBottom color='primary' component='h3' align='center' className='textos2'>Cadastre-se e nos ajude a vestir o mundo com solidariedade!</Typography>
            </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box >
                    <form onSubmit={onSubmit}>
                        <MuiThemeProvider theme={theme}>
                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth></TextField>
                            <TextField value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth></TextField>
                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                            <TextField value={user.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='tipo' label='tipo' variant='outlined' name='tipo' margin='normal' fullWidth></TextField>
                        </MuiThemeProvider>
                    </form>
                </Box>
            </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box >
                    <form onSubmit={onSubmit}>
                        <MuiThemeProvider theme={theme}>
                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth></TextField>
                            <TextField value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth></TextField>
                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                            <TextField value={user.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='tipo' label='tipo' variant='outlined' name='tipo' margin='normal' fullWidth></TextField>
                        </MuiThemeProvider>
                    </form>
                </Box>
            </Grid>
            <Grid item xs={12} alignItems='center'>
                <Box marginTop={2} textAlign='center'>
                    <Link to='/login' className='text-decorator-none' >
                        <Button variant='contained' className='btnCancelar'>
                            Cancelar
                        </Button>
                    </Link>
                    <Button type='submit' variant='contained' className='btn2'>
                        Cadastrar
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;