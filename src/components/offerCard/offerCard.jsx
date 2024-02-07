"use client"
import { getJobs } from '@/API/getJob';
import Form from "@/components/module/formulario";
import Link from 'next/link';
import { NextResponse } from 'next/server';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "./offerCard.css";

const OfferCard_Array = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getJobs(); // Aguarde a resolução da Promise
        console.log(response);
        setOffers(response.results); // Atualize o estado com a matriz de ofertas da resposta da API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {offers.map((offer, index) => (
        <OfferCard
          key={index}
          title={offer.title}
          location={[
            <span className='location'>{offer.city}</span>,
            <span className='location'> - </span>,
            <span className='location'>{offer.state}</span>,
            <span className='location'> | </span>,
            <span className='location'>{offer.branch}</span>,
            <span className='location'> | </span>,
            <span className='location'> {offer.sla_date}</span>,
            <span className='location'> | </span>,
            <span className='location'>{offer.custom_fields[0].answer}</span>,
          ]}
          description={offer.description} 
        />
      ))}
    </div>
  );
};

const OfferCard = ({ title, location, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="flex flex-col items-center justify-center" style={{ padding: '0px 20px 0px 20px' }}>
      <div className="hoverdiv relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border-box mb-4" style={{ maxWidth: '1200px' }}>
        <div className="vertical-line"></div>
        <div className="flex flex-col lg:flex-row justify-between" style={{ padding: '24px 24px 15px', color: '#4c4f51' }}>
          <div className="flex flex-col lg:w-2/3 lg:pr-4" style={{ padding: '0px 10px 0px 0px' }}>
            <div className="flex items-center" onClick={() => setShowDetails(!showDetails)} style={{ cursor: 'pointer' }}>
              <h2 className="mr-2 text-lg lg:text-xl xl:text-2xl">{title}</h2>
              <button
                className="text-gray-600 focus:outline-none focus:text-gray-700"
              >
                <svg className={`h-6 w-6 transition-transform transform ${showDetails ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="text-gray-600 mt-2">{location}</div>
            <div className={`description text-gray-700 mt-4 ${showDetails ? 'h-auto' : 'h-0 overflow-hidden'}`} style={{ transition: 'all .5s' }} dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
          <div className="flex justify-end lg:w-1/3" style={{ margin: '10px 10px 0px 0px' }}>
            <Link href="./mais-informacoes">
              <button className="mr-2 btn-secondary" style={{ height: '45px' }}>
                Ver Oferta
              </button>
            </Link>
            <button onClick={handleButtonClick} className='text-white btn-primary' style={{ height: '45px' }}>
              Candidatar-se
            </button>
            {showForm &&
              ReactDOM.createPortal(
                <Form isOpen={showForm} onClose={handleCloseForm} />,
                document.body
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard_Array;