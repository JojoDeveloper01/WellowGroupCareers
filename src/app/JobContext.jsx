// src/API/jobContext.jsx
"use client"
import { createContext, useContext, useEffect, useState } from 'react';

const JobContext = createContext();
export const useJobContext = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get-jobs');
        const data = await response.json();
        setOffers(data.jobs);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setLoading(false);
      }
    };

    // Chame a função de busca ao montar o componente
    fetchData();
  }, []);

  return (
    <JobContext.Provider value={{ loading, offers }}>
      {children}
    </JobContext.Provider>
  );
};
