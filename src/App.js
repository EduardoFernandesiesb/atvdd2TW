import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ItemProvider } from './context/ItemContext';
import MenuNavegacao from './components/MenuNavegacao';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';
import { CssBaseline, Container } from '@mui/material'; 

function App() {
  return (
    <ItemProvider>
      <Router>
        <CssBaseline /> {}
        <MenuNavegacao />
        <Container sx={{ mt: 4 }}> {}
          <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/listagem" element={<Listagem />} />
          </Routes>
        </Container>
      </Router>
    </ItemProvider>
  );
}

export default App;