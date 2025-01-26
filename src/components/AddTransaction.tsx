import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalStyled from './ModalStyled';
import { Button, FormControl, Grid2, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { Transaction, TransactionType } from '../types/transaction.models';
import generateId from '../utils/generateId';


interface AddTransactionProps {
    openModal: boolean
    actionClose: () => void
    titleModal: string
}

const AddTransaction: React.FC<AddTransactionProps> = ({ openModal, actionClose, titleModal }) => {

    const [title, setTitle] = useState<string>('')
    const [value, setValue] = useState<number>(0)
    const [type, setType] = useState<TransactionType>(TransactionType.Income)
    const [date, setDate] = useState<string>('')


    const transaciton: Transaction = ({ id: generateId(), title, value, type, date: new Date(date) })

    return (
        <>
            <Modal
                open={openModal}
                onClose={actionClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <ModalStyled>
                    <Grid2 container spacing={1}>
                        <Grid2 size={12}>
                            <Typography id="modal-modal-title" variant="h5" component="h2" marginBottom={3}>
                                {titleModal}
                            </Typography>
                        </Grid2>

                        <Grid2 size={12}>
                            <TextField id="outlined-basic" label="Título" type='text' value={title} onChange={e => setTitle(e.target.value)} variant="outlined" fullWidth required />
                        </Grid2>

                        <Grid2 size={12}>
                            <TextField id="outlined-basic" label="Valor" type='number' value={value} onChange={e => setValue(Number(e.target.value))} variant="outlined" fullWidth required />
                        </Grid2>
                        <Grid2 size={6}>
                            <TextField id="outlined-basic" type="date" variant="outlined" value={date} onChange={e => setDate(e.target.value)} fullWidth />
                        </Grid2>
                        <Grid2 size={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="tipo"
                                    defaultValue={TransactionType.Income}
                                    onChange={e => setType(e.target.value as TransactionType)}
                                >
                                    <MenuItem value={TransactionType.Income}>Entrada</MenuItem>
                                    <MenuItem value={TransactionType.Outcome}>Saída</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid2>
                        <Grid2 size={6}>
                            <Button onClick={actionClose} variant='outlined' size='large' fullWidth >Cancelar</Button>
                        </Grid2>
                        <Grid2 size={6}>
                            <Button onClick={() => console.log(transaciton)} variant='contained' size='large' fullWidth  >Adicionar</Button>
                        </Grid2>
                    </Grid2>
                </ModalStyled>
            </Modal >
        </>
    );
}

export default AddTransaction
