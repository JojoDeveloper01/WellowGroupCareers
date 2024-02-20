// src/API/jobContext.jsx
"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import unorm from 'unorm';

const JobContext = createContext();
export const useJobContext = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [allOffers, setAllOffers] = useState([]);
  const [searchResultsEmpty, setSearchResultsEmpty] = useState(false)

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get-jobs');
        const data = await response.json();
        setOffers(data.jobs);
        setAllOffers(data.jobs);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setLoading(false);
      }
    };
    // Chamar a função de busca ao montar o componente
    fetchData();
  }, []);

  const removeAccents = (str) => unorm.nfd(str).replace(/[\u0300-\u036f]/g, '');
  const normalizeString = (str) => removeAccents(str).toLowerCase();
  const [selectedArea, setSelectedArea] = useState("Todas as Áreas");
  const [selectedConcelho, setSelectedConcelho] = useState("Todos os Concelhos");

  const fetchJobData = async (searchQuery) => {
    setLoading(true);
    try {
      //Remover acentos
      const normalizedQuery = normalizeString(searchQuery);

      const filteredOffers = allOffers.filter((offer) =>
        ['title', 'city', 'state', 'branch', 'custom_fields'].some(
          (field) =>
            typeof offer[field] === 'string' &&
            normalizeString(offer[field]).indexOf(normalizedQuery) !== -1
            &&
            // Adicione lógica para os filtros de área e concelho
            (selectedArea === "Todas as Áreas" || offer.branch.split(' ').some(branchWord => normalizeString(branchWord) === normalizeString(selectedArea))) &&
            (selectedConcelho === "Todos os Concelhos" || normalizeString(offer.city) === normalizeString(selectedConcelho) || normalizeString(offer.state) === normalizeString(selectedConcelho))
        )
      );

      setOffers(filteredOffers);
      setSearchResultsEmpty(filteredOffers.length === 0)
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider value={{ loading, offers, fetchJobData, searchResultsEmpty, selectedArea, setSelectedArea, selectedConcelho, setSelectedConcelho }}>
      {children}
    </JobContext.Provider>
  );
};
