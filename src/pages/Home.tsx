import React from "react"
import Navbar from "../componets/Navbar"
import Dashboard from "../componets/Dashboard"
import TitlePage from "../componets/TitlePage"
import { Button, Grid2 } from "@mui/material"
import ContainerStyled from "../componets/ContainerStyled"
import AddIcon from '@mui/icons-material/Add';


const Home: React.FC = () => {
    return (
        <>
            <Grid2 container spacing={3}>
                <Grid2 size={12}>
                    <Navbar />
                </Grid2>
                <ContainerStyled maxWidth="md">
                    <Grid2 container>
                        <Grid2 size={10.6}>
                            <TitlePage title="Home" />
                        </Grid2>
                        <Grid2 size={1.4} mt={1}>
                            <Button variant="contained">
                                <AddIcon fontSize="large" />
                            </Button>
                        </Grid2>
                    </Grid2>
                    <Dashboard />
                </ContainerStyled >
            </Grid2 >

        </>

    )
}

export default Home