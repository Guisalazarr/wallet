import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalStyled from './ModalStyled';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';


interface AddTransactionProps {
    openModal: boolean
    actionClose: () => void
}

const AddTransaction: React.FC<AddTransactionProps> = ({ openModal, actionClose }) => {
    return (
        <>
            <Modal
                open={openModal}
                onClose={actionClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalStyled>
                    <Typography id="modal-modal-title" variant="h5" component="h2" marginBottom={3}>
                        Adicione uma transação
                    </Typography>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="income" control={<Radio />} label="Entrada" />
                        <FormControlLabel value="outcome" control={<Radio />} label="Saída" />
                    </RadioGroup>
                    <TextField id="outlined-basic" label="Título" type='text' variant="outlined" fullWidth sx={{ marginBottom: '10px' }} required />
                    <TextField id="outlined-basic" label="Valor" type='number' variant="outlined" fullWidth sx={{ marginBottom: '10px' }} required />

                    <Button onClick={actionClose} variant='outlined' size='large' fullWidth sx={{ mb: '10px' }}>Cancelar</Button>
                    <Button onClick={actionClose} variant='contained' size='large' fullWidth >Adicionar</Button>
                </ModalStyled>
            </Modal>
        </>
    );
}

export default AddTransaction
