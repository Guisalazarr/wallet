import { Container, styled } from '@mui/material';

const ContainerLayout = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '4rem',
    paddingBottom: '1rem',
    minHeight: '100vh'
});

export default ContainerLayout;