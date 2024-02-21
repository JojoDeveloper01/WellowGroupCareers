"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { getJobs } from './getJob';

const JobContext = createContext();
export const useJobContext = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);

  const fetchJobs = async (page) => {
    try {
      const { filteredOffers } = await getJobs(page);
      return filteredOffers;
    } catch (error) {
      console.error(`Error fetching data for page ${page}:`, error);
      return [];
    }
  };

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        let currentPage = 1;
        let allOffers = [];

        while (true) {
          const currentOffers = await fetchJobs(currentPage);
          if (currentOffers.length === 0) {
            break;
          }

          allOffers = [...allOffers, ...currentOffers];
          currentPage += 1;
        }

        setOffers(allOffers);
      } catch (error) {
        console.error('Error fetching all jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, []);

  return (
    <JobContext.Provider value={{ loading, offers }}>
      {children}
    </JobContext.Provider>
  );
};