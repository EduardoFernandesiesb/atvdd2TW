import React, { useState, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import { TextField, Button, Box, Typography, Paper, Stack } from '@mui/material';
import styles from './FormularioCadastro.module.css';

const FormularioCadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [erros, setErros] = useState({});
  const { adicionarItem } = useContext(ItemContext);

  const validar = () => {
    const novosErros = {};
    if (!nome) novosErros.nome = 'O nome é obrigatório';
    if (!email) {
      novosErros.email = 'O e-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      novosErros.email = 'O e-mail é inválido';
    }
    return novosErros;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const errosDeValidacao = validar();
    if (Object.keys(errosDeValidacao).length > 0) {
      setErros(errosDeValidacao);
    } else {
      // Chama a função do contexto para adicionar o item via API
      adicionarItem({ name: nome, email });
      
      // Limpa os campos e os erros após o envio
      setNome('');
      setEmail('');
      setErros({});
    }
  };

  return (
    <Paper elevation={0} className={styles.formWrapper} sx={{ p: 4 }}>
      {}
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Typography variant="h5" component="h2" gutterBottom>
          Formulário de Cadastro
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            error={!!erros.nome}
            helperText={erros.nome}
          />
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!erros.email}
            helperText={erros.email}
          />
          <Button type="submit" variant="contained" size="large" className={styles.submitButton}>
            Cadastrar
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default FormularioCadastro;