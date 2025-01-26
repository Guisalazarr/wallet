import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalStyled from './ModalStyled';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useState } from 'react';
import { Transaction } from '../types/transaction.models';



interface AddTransactionProps {
    openModal: boolean
    actionClose: () => void

}

const AddTransaction: React.FC<AddTransactionProps> = ({ openModal, actionClose }) => {

    const [title, setTitle] = useState<string>('')
    const [value, setValue] = useState<number>(0)
    const [type, setType] = useState<string>('')
    const [date, setDate] = useState<any>()

    const createTransaction = () => {
        console.log(transaciton)
    }

    const transaciton: Transaction = ({ title, value, type, date })
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
                        value={type}
                        onChange={e => setType(e.target.value)}
                    >
                        <FormControlLabel value="income" control={<Radio />} label="Entrada" />
                        <FormControlLabel value="outcome" control={<Radio />} label="Saída" />
                        <TextField id="outlined-basic" type="date" variant="outlined" sx={{ width: '200px' }} value={date} onChange={e => setDate(e.target.value)} />
                    </RadioGroup>



                    <TextField id="outlined-basic" label="Título" type='text' value={title} onChange={e => setTitle(e.target.value)} variant="outlined" fullWidth sx={{ mb: '10px', mt: '10px' }} required />
                    <TextField id="outlined-basic" label="Valor" type='number' value={value} onChange={e => setValue(Number(e.target.value))} variant="outlined" fullWidth sx={{ mb: '10px', mt: '10px' }} required />


                    <Button onClick={createTransaction} variant='contained' size='large' fullWidth  >Adicionar</Button>
                    <Button onClick={actionClose} variant='outlined' size='large' fullWidth sx={{ mb: '10px', mt: '10px' }}>Cancelar</Button>

                </ModalStyled>
            </Modal >
        </>
    );
}

export default AddTransaction
