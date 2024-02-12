"use client";
import { getJobs } from "@/API/getJob";
import Form from "@/components/module/formulario";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ButtonOffer from "./buttonOffer";
import LoadingCard from './loadingCard';
import "./offerCard.css";

const OfferCard = ({ title, location, description, job }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className='flex flex-col items-center justify-center px-[.5rem] py-[1rem]'>
      <div className='hoverdiv relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border-box' style={{ maxWidth: "1200px" }}>
        <div className='vertical-line'></div>
        <div className='flex flex-col lg:flex-row justify-between py-[.6rem] px-[1.5rem] text-gray-600'>
          <div className='flex flex-col lg:w-2/3 lg:p-[1rem]'>
            <div className='flex items-center cursor-pointer' onClick={() => setShowDetails(!showDetails)}>
              <h2 className='mr-2 text-lg lg:text-xl xl:text-2xl'>{title}</h2>
              <button className='text-gray-600 focus:outline-none focus:text-gray-700'>
                <svg className={`h-6 w-6 transition-transform transform ${showDetails ? "rotate-180" : ""}`} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>
            </div>
            <div className='text-gray-600 mt-2'>{location}</div>
            <div className={`description text-gray-700 mt-4 ${showDetails ? "h-auto" : "h-0 overflow-hidden"}`} style={{ transition: "all .5s" }} dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
          <div className='flex justify-end max-[454px]:justify-center  lg:w-1/3 m-4'>
            <ButtonOffer job={job} />
            <button onClick={handleButtonClick} className='text-white btn-primary' style={{ height: "45px" }}>
              Candidatar-se
            </button>
            {showForm && ReactDOM.createPortal(<Form isOpen={showForm} onClose={handleCloseForm} />, document.body)}
          </div>
        </div>
      </div>
    </div>
  );
};

const OfferCardArray = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchAndSetJobs = async (targetPage) => {
    try {
      const { filteredOffers } = await getJobs(targetPage);
      setOffers(filteredOffers);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetJobs(page);
  }, [page]);

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);
  };

  const handleShowPrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      setLoading(true);
    }
  };

  return (
    <div className="flex flex-col gap-16">
      {loading ? (
        <div>
          {[...Array(5)].map((_, index) => <LoadingCard key={index} />)}
        </div>
      ) : (
        <div>
          {offers.map((job, index) => (
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
        <button onClick={handleShowMore} disabled={page === 12} className="bg-[var(--purple-wellow)]">
          Próxima
        </button>
      </div>
    </div>
  );
};

export default OfferCardArray;
