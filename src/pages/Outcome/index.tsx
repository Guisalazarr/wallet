import { Grid2 } from "@mui/material"
import React from "react"
import TitlePage from "../../components/TitlePage"
import Search from "../../components/Search"
import ListTransactions from "../../components/ListTransactions"
import RemoveIcon from '@mui/icons-material/Remove';
import { Transaction, TransactionType } from "../../types/transaction.models"

const Outcome: React.FC = () => {
    const data: Transaction[] = [
        { title: 'Mercado', value: 300, type: TransactionType.Outcome, date: new Date() },
        { title: 'Mercado', value: 300, type: TransactionType.Outcome, date: new Date() },
        { title: 'Mercado', value: 300, type: TransactionType.Outcome, date: new Date() },
        { title: 'Mercado', value: 300, type: TransactionType.Outcome, date: new Date() },
        { title: 'Mercado', value: 300, type: TransactionType.Outcome, date: new Date() }
    ]

    return (
        <>
            <Grid2 container spacing={3}>
                <Grid2 size={12}>
                    <TitlePage title="Saídas" />
                </Grid2>
                <Grid2 size={12}>
                    <Search />
                </Grid2>
                <Grid2 size={12} >
                    <ListTransactions color="red" icon={<RemoveIcon />} data={data} />
                </Grid2>
            </Grid2>
        </>
    )
}

export default Outcome