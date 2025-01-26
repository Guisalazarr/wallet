import { Grid2 } from "@mui/material"
import React from "react"
import TitlePage from "../../components/TitlePage"
import Search from "../../components/Search"
import ListTransactions from "../../components/ListTransactions"
import AddIcon from '@mui/icons-material/Add';
import { Transaction } from "../../types/transaction.models"

const Income: React.FC = () => {
    const data: Transaction[] = [
        { title: 'Zanotti', value: 5000, type: 'income', date: '10/04/2000' },
        { title: 'Zanotti', value: 5000, type: 'income', date: '10/04/2000' },
        { title: 'Zanotti', value: 5000, type: 'income', date: '10/04/2000' },
        { title: 'Zanotti', value: 5000, type: 'income', date: '10/04/2000' },
        { title: 'Zanotti', value: 5000, type: 'income', date: '10/04/2000' }
    ]
    return (
        <>
            <Grid2 container spacing={3}>
                <Grid2 size={12}>
                    <TitlePage title="Entradas" />
                </Grid2>
                <Grid2 size={12}>
                    <Search />
                </Grid2>
                <Grid2 size={12} >
                    <ListTransactions color="green" data={data} icon={<AddIcon />} />
                </Grid2>
            </Grid2>
        </>
    )
}

export default Income