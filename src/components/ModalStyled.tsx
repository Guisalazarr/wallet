import { Box, styled } from "@mui/material";

const ModalStyled = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: '5%',
    backgroundColor: '#f9f9f9',
    border: '2px solid #17266b',
    boxShadow: '24',
    padding: '30px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
})

export default ModalStyled