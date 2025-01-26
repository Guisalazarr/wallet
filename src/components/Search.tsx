import { Button, Grid2, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";

const Search: React.FC = () => {

    const [date, setDate] = useState<string>('')
    const [search, setSearch] = useState<string>('')

    return (
        <Grid2 container spacing={2}>
            <Grid2 size={4}>
                <TextField id="outlined-basic" type="date" value={date} onChange={e => setDate(e.target.value)} variant="outlined" fullWidth sx={{ height: '50px' }} />
            </Grid2>
            <Grid2 size={6}>
                <TextField id="outlined-basic" label="Pesquisar" value={search} onChange={e => setSearch(e.target.value)} variant="outlined" fullWidth sx={{ height: '50px' }} />
            </Grid2>
            <Grid2 size={2}>
                <Button variant="contained" size="large" fullWidth sx={{ height: '55px' }}>
                    <SearchIcon />
                </Button>
            </Grid2>
        </Grid2>
    )
}

export default Search