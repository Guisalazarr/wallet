import { Button, Grid2, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

const Search: React.FC = () => {

    return (
        <Grid2 container spacing={2}>
            <Grid2 size={4}>
                <TextField id="outlined-basic" type="date" variant="outlined" fullWidth sx={{ height: '50px' }} />
            </Grid2>
            <Grid2 size={6}>
                <TextField id="outlined-basic" label="Pesquisar" variant="outlined" fullWidth sx={{ height: '50px' }} />
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