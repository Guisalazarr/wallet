import { Grid2 } from '@mui/material';
import React from 'react';
import Navbar from './componets/Navbar';
import ContainerLayout from './componets/ContainerLayout'


interface DefaultLayoutProps {
    component: React.FC;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ component: Component }) => {
    return (
        <Grid2 container>
            <Grid2 size={12}>
                <Navbar />
            </Grid2>
            <Grid2 size={12}>
                <ContainerLayout maxWidth="md">
                    <Component />
                </ContainerLayout>
            </Grid2>
        </Grid2>
    );
};

export default DefaultLayout;