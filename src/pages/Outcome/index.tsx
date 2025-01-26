import { Grid2 } from "@mui/material"
import React from "react"
import TitlePage from "../../componets/TitlePage"
import Search from "../../componets/Search"
import ListTransactions from "../../componets/ListTransactions"
import RemoveIcon from '@mui/icons-material/Remove';
import { Transaction } from "../../types/transaction.models"

const Outcome: React.FC = () => {
    const data: Transaction[] = [
        { title: 'Mercado', value: 300, type: 'outcome', date: '19/01/2025' },
        { title: 'Mercadp', value: 300, type: 'outcome', date: '19/01/2025' },
        { title: 'Mercadp', value: 300, type: 'outcome', date: '19/01/2025' },
        { title: 'Mercadp', value: 300, type: 'outcome', date: '19/01/2025' },
        { title: 'Mercadp', value: 300, type: 'outcome', date: '19/01/2025' }
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