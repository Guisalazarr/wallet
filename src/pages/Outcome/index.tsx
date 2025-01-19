import { Grid2 } from "@mui/material"
import React from "react"
import TitlePage from "../../componets/TitlePage"
import Search from "../../componets/Search"
import ListTransactions from "../../componets/ListTransactions"

const Outcome: React.FC = () => {

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
                    <ListTransactions />
                </Grid2>
            </Grid2>
        </>
    )
}

export default Outcome