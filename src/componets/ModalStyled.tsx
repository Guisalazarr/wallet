import { Box, styled } from "@mui/material";

const ModalStyled = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: '5%',
    backgroundColor: '#e3efe3',
    border: '2px solid #1976d2',
    boxShadow: '24',
    padding: '30px',
    textAlign: 'center'
})

export default ModalStyled