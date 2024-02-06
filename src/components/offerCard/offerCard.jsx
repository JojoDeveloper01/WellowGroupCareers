"use client"
import apiJob from '@/API/jobConvo';
import Form from "@/components/module/formulario";
import Link from 'next/link';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import "./offerCard.css";

const OfferCard_Array = () => {
  return (
    <div>

      <OfferCard
        title={apiJob.title}
        location="Lisboa - Lisboa | Knower™ Tech | Híbrido | 22/11/2023"
        description=
        {
          <>
            <p>A Knower™ está atualmente em processo de recrutamento de Empregado/a de limpeza (M/F/D) para empresa nossa cliente.<br /><br /></p>
            <p>Os Empregados de Limpeza (M/F/D) serão responsáveis por diversas tarefas inerentes a categoria profissional.<br /><br /></p>
            <p>Local de trabalho: Aveiro.</p>
          </>
        }
      />

      <OfferCard
        title="Empregado/a de Limpeza (M/F/D) Part-time | Aveiro"
        location="Lisboa - Lisboa | Knower™ Tech | Híbrido | 22/11/2023"
        description=
        {
          <>
            <p>A Knower™ está atualmente em processo de recrutamento de Empregado/a de limpeza (M/F/D) para empresa nossa cliente.<br /><br /></p>
            <p>Os Empregados de Limpeza (M/F/D) serão responsáveis por diversas tarefas inerentes a categoria profissional.<br /><br /></p>
            <p>Local de trabalho: Aveiro.</p>
          </>
        }
      />

      <OfferCard
        title="Empregado/a de Limpeza (M/F/D) Part-time | Aveiro"
        location="Lisboa - Lisboa | Knower™ Tech | Híbrido | 22/11/2023"
        description=
        {
          <>
            <p>A Knower™ está atualmente em processo de recrutamento de Empregado/a de limpeza (M/F/D) para empresa nossa cliente.<br /><br /></p>
            <p>Os Empregados de Limpeza (M/F/D) serão responsáveis por diversas tarefas inerentes a categoria profissional.<br /><br /></p>
            <p>Local de trabalho: Aveiro.</p>
          </>
        }
      />

      <OfferCard
        title="Empregado/a de Limpeza (M/F/D) Part-time | Aveiro"
        location="Lisboa - Lisboa | Knower™ Tech | Híbrido | 22/11/2023"
        description=
        {
          <>
            <p>A Knower™ está atualmente em processo de recrutamento de Empregado/a de limpeza (M/F/D) para empresa nossa cliente.<br /><br /></p>
            <p>Os Empregados de Limpeza (M/F/D) serão responsáveis por diversas tarefas inerentes a categoria profissional.<br /><br /></p>
            <p>Local de trabalho: Aveiro.</p>
          </>
        }
      />
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
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border-box mb-4" style={{ maxWidth: '1200px' }}>
        <div className="vertical-line"></div>
        <div className="flex flex-col lg:flex-row justify-between" style={{ padding: '24px 24px 15px' }}>
          <div className="flex flex-col lg:w-2/3 lg:pr-4" style={{ padding: '0px 10px 0px 0px' }}>
            <div className="flex items-center">
              <h2 className="mr-2 text-lg lg:text-xl xl:text-2xl">{title}</h2>
              <button
                className="text-gray-600 focus:outline-none focus:text-gray-700"
                onClick={() => setShowDetails(!showDetails)}
              >
                <svg className={`h-6 w-6 transition-transform transform ${showDetails ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="text-gray-600 mt-2">{location}</div>
            <div className={`text-gray-700 mt-4 ${showDetails ? 'h-auto' : 'h-0 overflow-hidden'}`} style={{ transition: 'height 0.3s ease' }}>
              {description}
            </div>
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