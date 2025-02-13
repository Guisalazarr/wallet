import React, { useState } from "react"
import { Button, Grid2 } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import TitlePage from "../../components/TitlePage";
import AddTransaction from "../../components/AddTransaction";
import Dashboard from "./components/Dashboard";

const Home: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
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
            <Grid2 size={12}>
                <Dashboard />
            </Grid2>
            <Grid2 size={12}>
                <AddTransaction
                    actionClose={() => setOpenModal(false)}
                    openModal={openModal}
                    titleModal="ADICIONAR TRANSAÇÃO"
                />
            </Grid2>
        </>
    )
}

export default Home