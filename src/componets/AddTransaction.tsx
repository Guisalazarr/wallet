import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalStyled from './ModalStyled';
import { Button, FormControl, Grid2, InputLabel, MenuItem, Select, TextField } from '@mui/material';
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
                    <Grid2 container spacing={1}>
                        <Grid2 size={12}>
                            <Typography id="modal-modal-title" variant="h5" component="h2" marginBottom={3}>
                                Adicione uma transação
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
                                    onChange={e => setType(e.target.value)}
                                >
                                    <MenuItem value={10}>Entrada</MenuItem>
                                    <MenuItem value={20}>Saída</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid2>
                        <Grid2 size={6}>
                            <Button onClick={actionClose} variant='outlined' size='large' fullWidth >Cancelar</Button>
                        </Grid2>
                        <Grid2 size={6}>
                            <Button onClick={createTransaction} variant='contained' size='large' fullWidth  >Adicionar</Button>
                        </Grid2>













                    </Grid2>


                </ModalStyled>
            </Modal >
        </>
    );
}

export default AddTransaction
