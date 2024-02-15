"use client"
import { useJobContext } from '@/API/JobContext';
import LoadingCard from '@/components/offerCard/loadingCard';
import OfferCard from "@/components/offerCard/offerCard";
import SearchBar from "@/components/searchBar/searchBar";
import { Key, useState } from "react";
import "./page.css";

export default function Home() {
  const { loading, offers } = useJobContext();
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedOffers = offers.slice(startIndex, endIndex);

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleShowPrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className='container'>
      <SearchBar />
      <section className='section-offers'>
        <h2 className='section-title'>Oportunidades</h2>
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