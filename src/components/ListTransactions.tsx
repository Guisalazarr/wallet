import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Icon, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import { Transaction } from '../types/transaction.models';
import { toFormatReal } from '../utils/toFormatReal';
import { toFormatDate } from '../utils/toFormatDate';
import AddTransaction from './AddTransaction';

interface ListTransactionsProps {
    data: Transaction[]
    color: string
    icon: any
}

const ListTransactions: React.FC<ListTransactionsProps> = ({ data, color, icon }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleEdit = (transaction: Transaction) => {
        setOpenModal(true)
    }

    return (
        <>
            <List sx={{ boxShadow: '2', backgroundColor: '#eeeeee' }}>

                {data.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <ListItem sx={{ maxWidth: '100%', padding: '1rem' }}>
                                <Icon sx={{ color: { color }, marginRight: '2rem' }} >
                                    {icon}
                                </Icon>
                                <ListItemText primary={toFormatReal(item.value)} />
                                <ListItemText primary={item.title} />
                                <ListItemText primary={toFormatDate(item.date)} />
                                <IconButton size='large' onClick={() => handleEdit(item)}>
                                    <EditIcon color='primary' />
                                </IconButton>
                                <IconButton size='large'>
                                    <DeleteIcon sx={{ color: 'red' }} />
                                </IconButton>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    )
                })}
            </List>
            <AddTransaction
                actionClose={() => setOpenModal(false)}
                openModal={openModal}
                titleModal='EDITAR TRANSAÇÃO'
            />
        </>

    );
}

export default ListTransactions