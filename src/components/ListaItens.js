import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import { List, ListItem, ListItemText, IconButton, Typography, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './ListaItens.module.css'; 

const ListaItens = () => {
  const { itens, removerItem } = useContext(ItemContext);

  if (itens.length === 0) {
    return (
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6">Nenhum item cadastrado.</Typography>
        </Paper>        
    );
  }

  return (
    <Paper elevation={3}>
      <List>
        {itens.map((item) => (
          <ListItem
            key={item.id}
            divider
            className={styles.listItem} 
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => removerItem(item.id)}>
                <DeleteIcon className={styles.deleteIcon} /> {/* Estilo para o ícone */}
              </IconButton>
            }
          >
            <ListItemText primary={item.name} secondary={item.email} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ListaItens;