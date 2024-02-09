"use client"
import { getJobs } from '@/API/getJob';
import ButtonOffer from '@/components/ButtonOffer/buttonOffer';
import Form from "@/components/module/formulario";
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "./offerCard.css";

const OfferCard_Array = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getJobs();
        console.log(response);
        setOffers(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <div className="flex flex-col items-center justify-center" style={{ padding: '0px 20px 0px 20px' }} key={index}>
            <div className="hoverdiv relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border-box mb-4" style={{ maxWidth: '1200px' }}>
              <div className="vertical-line bg-gray-300"></div>
              <div className="flex flex-col lg:flex-row justify-between" style={{ padding: '24px 24px 20px', color: '#4c4f51' }}>
                <div className="flex flex-col lg:w-2/3 lg:pr-4" style={{ padding: '0px 10px 0px 0px' }}>
                  <div className="flex items-center">
                    <div className="skeleton-text h-6 rounded bg-gray-300" style={{ width: '650px' }}></div>
                  </div>
                  <div className="flex items-center">
                    <div className="skeleton-text h-5 rounded bg-gray-300" style={{ width: '530px', margin: '20px 0px 15px 4px' }}></div>
                  </div>
                </div>
                <div className="flex justify-end lg:w-1/3" style={{ margin: '10px 10px 0px 0px' }}>
                  <div className="skeleton-button rounded-md bg-gray-300" style={{ width: '120px', height: '45px' }}></div>
                  <div className="skeleton-button rounded-md bg-gray-300 ml-2" style={{ width: '150px', height: '45px' }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  console.log('123', offers);

  return (
    <div>
      {offers.map((job, index) => (
        <OfferCard
          key={index}
          title={job.title}
          location={[
            <span className='location'>{job.city}</span>,
            <span className='location'> - </span>,
            <span className='location'>{job.state}</span>,
            <span className='location'> | </span>,
            <span className='location'>{job.branch}</span>,
            <span className='location'> | </span>,
            <span className='location'> {job.sla_date}</span>,
            <span className='location'> | </span>,
            <span className='location'>{job.custom_fields[0].answer}</span>,
          ]}
          description={job.description}
          offers={job}
        />
      ))}
    </div>
  );
};

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
    <div className="flex flex-col items-center justify-center" style={{ padding: '0px 20px 0px 20px' }}>
      <div className="hoverdiv relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border-box mb-4" style={{ maxWidth: '1200px' }}>
        <div className="vertical-line"></div>
        <div className="flex flex-col lg:flex-row justify-between" style={{ padding: '24px 24px 15px', color: '#4c4f51' }}>
          <div className="flex flex-col lg:w-2/3 lg:pr-4" style={{ padding: '0px 10px 0px 0px' }}>
            <div className="flex items-center" onClick={() => setShowDetails(!showDetails)} style={{ cursor: 'pointer' }}>
              <h2 className="mr-2 text-lg lg:text-xl xl:text-2xl">{title}</h2>
              <button className="text-gray-600 focus:outline-none focus:text-gray-700">
                <svg className={`h-6 w-6 transition-transform transform ${showDetails ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="text-gray-600 mt-2">{location}</div>
            <div className={`description text-gray-700 mt-4 ${showDetails ? 'h-auto' : 'h-0 overflow-hidden'}`} style={{ transition: 'all .5s' }} dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
          <div className="flex justify-end lg:w-1/3" style={{ margin: '10px 10px 0px 0px' }}>

            <ButtonOffer job={job} />
            <button onClick={handleButtonClick} className="text-white btn-primary" style={{ height: '45px' }}>
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