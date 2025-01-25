import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import React from "react"
import TitlePage from "../../componets/TitlePage";
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {

    const navigate = useNavigate();

    return (
        <Grid2 container spacing={2}>
            <Grid2 size={12}>
                <TitlePage title={'LOGIN'}></TitlePage>
            </Grid2>
            <Grid2 size={12}>
                <TextField
                    fullWidth
                    type="email"
                    id="email-login"
                    label="Digite seu e-mail"
                    variant="outlined"
                />
            </Grid2>
            <Grid2 size={12}>
                <TextField
                    fullWidth
                    type="password"
                    id="password"
                    label="Digite sua senha"
                    variant="outlined"
                />
            </Grid2>
            <Grid2 size={12}>
                <Button
                    variant="contained"
                    size="large"
                    sx={{ paddingX: '80px' }}
                    color="primary"
                    onClick={() => navigate('./home')}
                >
                    Entrar
                </Button>
            </Grid2>
            <Grid2 size={12}>
                <Link style={{ cursor: 'pointer' }}>
                    <Typography variant="body2" color="black">
                        CADASTRE-SE
                    </Typography>
                </Link>
            </Grid2>
        </Grid2>
    );
}
export default Login