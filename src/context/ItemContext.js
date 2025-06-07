import React, { createContext, useState, useEffect } from 'react';
import { getItens as getItensAPI, addItem as addItemAPI, removeItem as removeItemAPI } from '../services/api';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [itens, setItens] = useState([]);

  
  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await getItensAPI();
        setItens(response.data);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    };
    fetchItens();
  }, []);

  
  const adicionarItem = async (item) => {
    try {
      const response = await addItemAPI(item);
      
      setItens([...itens, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
    }
  };

  
  const removerItem = async (id) => {
    try {
      await removeItemAPI(id);
      
      setItens(itens.filter(item => item.id !== id));
    } catch (error) {
      console.error("Erro ao remover item:", error);
    }
  };

  return (
    <ItemContext.Provider value={{ itens, adicionarItem, removerItem }}>
      {children}
    </ItemContext.Provider>
  );
};