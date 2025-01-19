import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalStyled from './ModalStyled';
import { Button, TextField } from '@mui/material';


interface AddTransactionProps {
    openModal: boolean
    actionClose: () => void
}

const AddTransaction: React.FC<AddTransactionProps> = ({ openModal, actionClose }) => {
    return (
        <div>
            <Modal
                open={openModal}
                onClose={actionClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalStyled>
                    <Typography id="modal-modal-title" variant="h5" component="h2" marginBottom={4}>
                        Adicionar transação
                    </Typography>
                    <TextField id="outlined-basic" label="Título" type='text' variant="outlined" fullWidth sx={{ marginBottom: '10px' }} required />
                    <TextField id="outlined-basic" label="Valor" type='number' variant="outlined" fullWidth sx={{ marginBottom: '10px' }} required />
                    <Button onClick={actionClose} variant='outlined' size='large' fullWidth sx={{ marginBottom: '10px' }}>Cancelar</Button>
                    <Button onClick={actionClose} variant='contained' size='large' fullWidth >Cadastrar</Button>
                </ModalStyled>
            </Modal>
        </div>
    );
}

export default AddTransaction
