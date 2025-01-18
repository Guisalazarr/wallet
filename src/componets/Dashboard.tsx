import * as React from 'react';
import Card from './Card';
import { Grid2 } from '@mui/material';

const Dashboard: React.FC = () => {
    return (

        <Grid2
            container
            spacing={2}
            marginTop={3}
            columns={{ xs: 4, sm: 8, md: 12 }} >

            <Grid2 size={6}>
                < Card title='Entrada' value={1200} />
            </Grid2>
            <Grid2 size={6}>
                <Card title='Saída' value={900} />
            </Grid2>
            <Grid2 size={6}>
                <Card title='Saldo' value={600} />
            </Grid2>
            <Grid2 size={6}>
                <   Card title='Reserva' value={250} />
            </Grid2>

        </Grid2>
    );
}

export default Dashboard