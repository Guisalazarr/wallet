import React, { useState } from "react"
import { Button, Grid2 } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import Navbar from "../../componets/Navbar";
import ContainerStyled from "../../componets/ContainerStyled";
import TitlePage from "../../componets/TitlePage";
import Dashboard from "../../componets/Dashboard";
import AddTransaction from "../../componets/AddTransaction";


const Home: React.FC = () => {

    const [openModal, setOpenModal] = useState<boolean>(false);
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
                            <Button variant="contained" onClick={() => setOpenModal(true)}>
                                <AddIcon fontSize="large" />
                            </Button>
                        </Grid2>
                    </Grid2>
                    <Dashboard />
                </ContainerStyled >
            </Grid2 >
            <AddTransaction
                actionClose={() => setOpenModal(false)}
                openModal={openModal}
            />

        </>

    )
}

export default Home