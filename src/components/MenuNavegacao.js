import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const MenuNavegacao = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          By Eduardo Fernandes
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Cadastro
          </Button>
          <Button color="inherit" component={Link} to="/listagem">
            Listagem
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuNavegacao;