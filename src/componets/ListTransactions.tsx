import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Icon, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { Transaction } from '../types/transaction.models';

interface ListTransactionsProps {
    data: Transaction[]
    color: string
    icon: any
}

const ListTransactions: React.FC<ListTransactionsProps> = ({ data, color, icon }) => {

    return (
        <List sx={{ boxShadow: '2', backgroundColor: '#eeeeee' }}>

            {data.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <ListItem sx={{ maxWidth: '100%', padding: '1rem' }}>
                            <Icon sx={{ color: { color }, marginRight: '2rem' }} >
                                {icon}
                            </Icon>
                            <ListItemText primary={item.value.toFixed(2)} />
                            <ListItemText primary={item.title} />
                            <ListItemText primary={item.date} />
                            <IconButton size='large'>
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
    );
}

export default ListTransactions