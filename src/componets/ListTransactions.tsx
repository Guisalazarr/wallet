import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const ListTransactions: React.FC = () => {
    return (
        <List sx={{ boxShadow: '2', backgroundColor: '#eeeeee' }}>
            <ListItem sx={{ maxWidth: '100%', padding: '1rem' }}>
                <AddIcon sx={{ color: 'green', marginRight: '2rem' }} />
                <ListItemText primary="Zanotti" />
                <ListItemText primary="R$ 5.000,00" />
                <ListItemText primary="14/04/2000" />
                <IconButton size='large'>
                    <EditIcon color='primary' />
                </IconButton>
                <IconButton size='large'>
                    <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
            </ListItem>
            <Divider />

            <ListItem sx={{ maxWidth: '100%', padding: '1rem' }}>
                <AddIcon sx={{ color: 'green', marginRight: '2rem' }} />
                <ListItemText primary="Zanotti" />
                <ListItemText primary="R$ 5.000,00" />
                <ListItemText primary="14/04/2000" />
                <IconButton size='large'>
                    <EditIcon color='primary' />
                </IconButton>
                <IconButton size='large'>
                    <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
            </ListItem>
            <Divider />
            <ListItem sx={{ maxWidth: '100%', padding: '1rem' }}>
                <AddIcon sx={{ color: 'green', marginRight: '2rem' }} />
                <ListItemText primary="Zanotti" />
                <ListItemText primary="R$ 5.000,00" />
                <ListItemText primary="14/04/2000" />
                <IconButton size='large'>
                    <EditIcon color='primary' />
                </IconButton>
                <IconButton size='large'>
                    <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
            </ListItem>
            <Divider />
            <ListItem sx={{ maxWidth: '100%', padding: '1rem', borderRadius: '5px' }}>
                <AddIcon sx={{ color: 'green', marginRight: '2rem' }} />
                <ListItemText primary="Zanotti" />
                <ListItemText primary="R$ 5.000,00" />
                <ListItemText primary="14/04/2000" />
                <IconButton size='large'>
                    <EditIcon color='primary' />
                </IconButton>
                <IconButton size='large'>
                    <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
            </ListItem>
            <Divider />
            <ListItem sx={{ maxWidth: '100%', padding: '1rem', borderRadius: '5px' }}>
                <AddIcon sx={{ color: 'green', marginRight: '2rem' }} />
                <ListItemText primary="Zanotti" />
                <ListItemText primary="R$ 5.000,00" />
                <ListItemText primary="14/04/2000" />
                <IconButton size='large'>
                    <EditIcon color='primary' />
                </IconButton>
                <IconButton size='large'>
                    <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
            </ListItem>
            <Divider />
            <ListItem sx={{ maxWidth: '100%', padding: '1rem', borderRadius: '5px' }}>
                <AddIcon sx={{ color: 'green', marginRight: '2rem' }} />
                <ListItemText primary="Zanotti" />
                <ListItemText primary="R$ 5.000,00" />
                <ListItemText primary="14/04/2000" />
                <IconButton size='large'>
                    <EditIcon color='primary' />
                </IconButton>
                <IconButton size='large'>
                    <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
            </ListItem>
            <Divider />
        </List>
    );
}

export default ListTransactions