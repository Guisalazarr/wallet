import React from 'react';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TitlePage from '../../components/TitlePage';


const Register: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                    <TitlePage title={'CRIAR CONTA'}></TitlePage>
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        fullWidth
                        type="text"
                        id="name"
                        label="Nome"
                        variant="outlined"
                    />
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        fullWidth
                        type="email"
                        id="email-login"
                        label="E-mail"
                        variant="outlined"
                    />
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        fullWidth
                        type="password"
                        id="password"
                        label="Senha"
                        variant="outlined"
                    />
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        fullWidth
                        type="password"
                        id="repeat-password"
                        label="Repita a senha"
                        variant="outlined"
                    />
                </Grid2>
                <Grid2 size={12}>
                    <Button variant="contained" color="primary" size="large" fullWidth sx={{ height: '50px' }} >
                        Cadastre-se
                    </Button>
                </Grid2>
                <Grid2 size={12} >
                    <Button variant='outlined' size='large' fullWidth sx={{ height: '50px' }} onClick={() => navigate('/')}>
                        <Typography variant="body2" color="black">
                            JÁ TENHO CONTA
                        </Typography>
                    </Button>
                </Grid2>

            </Grid2>
        </>
    );
};

export default Register;