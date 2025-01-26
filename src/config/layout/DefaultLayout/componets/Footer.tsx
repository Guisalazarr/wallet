import React from "react"
import FooterStyled from "./FooterStyled"
import { Grid2, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer: React.FC = () => {
    return (
        <FooterStyled container >
            <Grid2 size={4}>
                <Typography variant="h5">
                    Guilherme Salazar
                </Typography>
            </Grid2>
            <Grid2 size={4}>
                <IconButton size="large" sx={{ color: 'white' }}
                    href="https://github.com/Guisalazarr" target="_blank"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton size="large" sx={{ color: 'white' }}
                    href="https://www.linkedin.com/in/guisalazarr/"
                    target="_blank">
                    <LinkedInIcon />
                </IconButton>
                <IconButton size="large" sx={{ color: 'white' }}
                    href="mailto:guisalazarr@gmail.com" target="_blank">
                    <EmailIcon />
                </IconButton>
            </Grid2>
            <Grid2 size={4}>
                <Typography variant="h6">
                    Sapiranga - 2025
                </Typography>
            </Grid2>
        </FooterStyled >
    )
}

export default Footer