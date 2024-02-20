"use client"
import LoadingCard from '@/components/offerCard/loadingCard';
import OfferCard from "@/components/offerCard/offerCard";
import SearchBar from "@/components/searchBar/searchBar";
import { Key, useEffect, useState } from "react";
import { useJobContext } from './JobContext';
import "./page.css";

export default function Home() {
  const { loading, offers, fetchJobData, searchResultsEmpty } = useJobContext();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const itemsPerPage = 5;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedOffers = offers.slice(startIndex, endIndex);

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleShowPrevious = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const updateSectionHeight = () => {
      const section = document.querySelector('.hero');
      if (section) setSectionHeight(section.clientHeight);
    };

    updateSectionHeight();
    window.addEventListener('resize', updateSectionHeight);
    return () => window.removeEventListener('resize', updateSectionHeight);
  }, []);

  const handleShowAll = () => {
    // Restaura todas as ofertas
    fetchJobData('');
    setSearchQuery('');
  };


  return (
    <div className='container'>
      <section className="hero background-image">
        <div className="background-settings">
          <div className="title-background">
            <h2>
              Junte-se e trabalhe connosco!
            </h2>
            <h3>
              Mais de 100 oportunidades de pertencer a uma das empresas mais felizes
            </h3>
          </div>
        </div>
      </section>
      <SearchBar heroHeight={sectionHeight} />

      <section className='section-offers'>
        <div className="flex flex-col gap-16">
          {loading ? (
            <div>
              {[...Array(itemsPerPage)].map((_, index) => <LoadingCard key={index} />)}
            </div>
          ) : (
            <div>
              {paginatedOffers.map((job: { title: any; city: any; state: any; branch: any; custom_fields: { resposta: any; }[]; pub_date: any; description: any; }, index: Key | null | undefined) => (
                <OfferCard
                  key={index}
                  title={job.title}
                  location={`${job.city} - ${job.state} | ${job.branch} | ${job.custom_fields[0]?.resposta || "Presencial"} | ${job.pub_date}`}
                  description={job.description}
                  job={job}
                />
              ))}
            </div>
          )}
          {searchResultsEmpty && (
            <div className="empty-results flex flex-wrap gap-x-8 gap-y-9 justify-between items-center mb-20 px-[10%] py-16 bg-[#EEEEEE] min-[1600px]:px-[15%]">
              <p className='opacity-60 text-lg'>Lamentamos, mas de momento não existem ofertas que correspondam à sua pesquisa.</p>
              <button className=' px-8 py-4 bg-purple-600 rounded-md bg-[var(--purple-wellow)] text-white' onClick={handleShowAll}>Ver todas as ofertas</button>              </div>
          )}
          <div className="flex justify-center gap-6 mb-16 cursor-pointer [&>*]:px-6 [&>*]:py-2 [&>*]:text-base [&>*]:rounded-[7%] [&>*]:text-white">
            <button onClick={handleShowPrevious} disabled={page === 1} className="bg-[var(--green-wellow)]">
              Anterior
            </button>
            <button onClick={handleShowMore} disabled={endIndex >= offers.length} className="bg-[var(--purple-wellow)]">
              Seguinte
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}